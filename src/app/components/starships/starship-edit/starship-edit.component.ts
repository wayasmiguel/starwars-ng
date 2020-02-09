import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';
import { MongoapiService } from '../../../services/mongoapi.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from'sweetalert2';

@Component({
  selector: 'app-starship-edit',
  templateUrl: './starship-edit.component.html',
  styleUrls: ['./starship-edit.component.scss'],
  providers: [SwapiService, MongoapiService]
})
export class StarshipEditComponent implements OnInit {

  starshipForm: FormGroup;
  submitted = false;
  clicked = false;

  constructor(
    private swapiService: SwapiService,
    private mongoapiService: MongoapiService,
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

    this.mongoapiService.storeStarship(this.starshipForm.value).subscribe(
      response => {
        //console.log(response);

        swal.fire({
          title: response.message,
          icon: 'success',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false
        }).then((result) => {
          if (result.value) {
              window.history.back();
              //this.router.navigate(['/']);
          }
        });

      },
      error => {
       //console.log(error);

       swal.fire({
         icon: 'error',
         title: 'Ha ocurrido un error al editar la nave espacial!',
         confirmButtonText: 'Aceptar',
         allowOutsideClick: false
       });
      }
    );

  }

}
