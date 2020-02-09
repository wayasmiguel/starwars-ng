import { Component, OnInit } from '@angular/core';
import { MongoapiService } from '../../../services/mongoapi.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from'sweetalert2';

@Component({
  selector: 'app-my-starship-edit',
  templateUrl: './my-starship-edit.component.html',
  styleUrls: ['./my-starship-edit.component.scss'],
  providers: [MongoapiService]
})
export class MyStarshipEditComponent implements OnInit {

  starshipForm: FormGroup;
  submitted = false;
  clicked = false;

  constructor(
    private mongoapiService: MongoapiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ){}

  ngOnInit() {

    this.spinner.show();

    this.starshipForm = this.formBuilder.group({
        id: ['', ''],
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

    this.mongoapiService.showStarship(id).subscribe(
      response => {
        this.starshipForm.controls.id.setValue(response.starship._id);
        this.starshipForm.controls.name.setValue(response.starship.name);
        this.starshipForm.controls.model.setValue(response.starship.model);
        this.starshipForm.controls.length.setValue(response.starship.length);
        this.starshipForm.controls.cargo_capacity.setValue(response.starship.cargo_capacity);
        this.starshipForm.controls.passengers.setValue(response.starship.passengers);
        this.starshipForm.controls.max_atmosphering_speed.setValue(response.starship.max_atmosphering_speed);
        this.starshipForm.controls.hyperdrive_rating.setValue(response.starship.hyperdrive_rating);
        this.starshipForm.controls.manufacturer.setValue(response.starship.manufacturer);
        this.starshipForm.controls.starship_class.setValue(response.starship.starship_class);
        this.starshipForm.controls.cost_in_credits.setValue(response.starship.cost_in_credits);

        this.spinner.hide();
      },
      error => {
        swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error al obtener los datos desde Mongoapi!',
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
      this.updateSS();
  }

  updateSS(){

    //console.log(this.starshipForm.value);return 0;

    this.mongoapiService.updateStarship(this.starshipForm.value).subscribe(
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
