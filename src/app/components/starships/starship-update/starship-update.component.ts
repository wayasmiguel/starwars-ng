import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from'sweetalert2';

@Component({
  selector: 'app-starship-update',
  templateUrl: './starship-update.component.html',
  styleUrls: ['./starship-update.component.scss'],
  providers: [SwapiService]
})
export class StarshipUpdateComponent implements OnInit {

  starshipForm: FormGroup;
  submitted = false;
  clicked = false;

  constructor(
    private swapiService: SwapiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.spinner.show();

    this.starshipForm = this.formBuilder.group({
        name: ['', Validators.required],
        model: ['', Validators.required],
        length: ['', Validators.required],
        cargo_capacity: ['', Validators.required],
        passengers: ['', Validators.required],
        max_atmosphering_speed: ['', Validators.required],
        hyperdrive_rating: ['', Validators.required],
        manufacturer: ['', Validators.required],
        starship_class: ['', Validators.required],
        cost_in_credits: ['', Validators.required],
        id_starship: ['','']
    });

    let id = this.activatedRoute.snapshot.paramMap.get("id");

    this.swapiService.getStarshipInfo(id).subscribe(
      response => {
        this.starshipForm.controls.name.setValue(response.name);
        this.starshipForm.controls.model.setValue(response.model);
        this.starshipForm.controls.length.setValue(response.length);
        this.starshipForm.controls.cargo_capacity.setValue(response.cargo_capacity);
        this.starshipForm.controls.passengers.setValue(response.passengers);
        this.starshipForm.controls.max_atmosphering_speed.setValue(response.max_atmosphering_speed);
        this.starshipForm.controls.hyperdrive_rating.setValue(response.hyperdrive_rating);
        this.starshipForm.controls.manufacturer.setValue(response.manufacturer);
        this.starshipForm.controls.starship_class.setValue(response.starship_class);
        this.starshipForm.controls.cost_in_credits.setValue(response.cost_in_credits);
        this.starshipForm.controls.id_starship.setValue(response.url.split('/')[5]);

        this.spinner.hide();
      },
      error => {
        swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error al obtener los datos desde Swapi',
          confirmButtonText: 'Aceptar'
        });
      }
    );

  }

  get f() { return this.starshipForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.clicked = true;
      // stop the process here if form is invalid
      if (this.starshipForm.invalid) {
          swal.fire({
            icon: 'error',
            title: 'Favor de completar los datos obligatorios!',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false
          });
          this.clicked = false;
          return;
      }
      this.storeSSUpdated();
  }

  storeSSUpdated(){

    //console.log(this.starshipForm.value);

    this.swapiService.storeStarship(this.starshipForm.value).subscribe(
      response => {console.log(response);


        if(response.status == 'success'){

          swal.fire({
            title: response.message,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
                //window.history.back();
                this.router.navigate(['/']);
            }
          });

        }

        // if(response.error){
        //
        //   swal.fire({
        //     title: response.error,
        //     icon: 'error',
        //     confirmButtonText: 'Aceptar',
        //     allowOutsideClick: false
        //   });
        //   this.clicked = false;
        //
        // }

      },
      error => {
       console.log(error);
       // swal.fire({
       //   icon: 'error',
       //   title: 'Ha ocurrido un error al actualizar la encuesta!',
       //   confirmButtonText: 'Aceptar',
       //   allowOutsideClick: false
       // });
      }
    );

  }

}
