import { Component, OnInit } from '@angular/core';
import { MongoapiService } from '../../../services/mongoapi.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import swal from'sweetalert2';

@Component({
  selector: 'app-my-starship-info',
  templateUrl: './my-starship-info.component.html',
  styleUrls: ['./my-starship-info.component.scss'],
  providers: [MongoapiService]
})
export class MyStarshipInfoComponent implements OnInit {

  starship = <any>[];

  constructor(
    private mongoapiService: MongoapiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.spinner.show();

    let id = this.activatedRoute.snapshot.paramMap.get("id");

    this.mongoapiService.showStarship(id).subscribe(
      response => {
        //console.log(response);

        this.starship = response.starship;

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

  deleteSS(id){

    swal.fire({
      title: 'Desea eliminar la nave espacial?',
      text: "Esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {

        this.mongoapiService.destroyStarship(id).subscribe(
          response => {
            //console.log(response);
            swal.fire({
              title: response.message,
              icon: 'success',
              confirmButtonText: 'Aceptar',
              allowOutsideClick: false
            }).then((result) => {
              if (result.value) {
                  this.router.navigate(['/my-starships']);
              }
            });

          },
          error => {
            swal.fire({
              icon: 'error',
              title: 'Ha ocurrido un error al eliminar la nave espacial!',
              confirmButtonText: 'Aceptar'
            });
          }
        );

      }
    });

  }

}
