import { Component, OnInit } from '@angular/core';
import { MongoapiService } from '../../services/mongoapi.service';
import swal from'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-my-starships',
  templateUrl: './my-starships.component.html',
  styleUrls: ['./my-starships.component.scss'],
  providers: [MongoapiService]
})
export class MyStarshipsComponent implements OnInit {

  starships = <any>[];

  constructor(
    private mongoapiService: MongoapiService,
    private spinner: NgxSpinnerService
  ){}

  ngOnInit() {

    this.spinner.show();

    this.mongoapiService.getMyStarships().subscribe(
      response => {
        //console.log(response);

        this.spinner.hide();

        if(response.error){
          swal.fire({
            icon: 'error',
            title: response.error,
            confirmButtonText: 'Aceptar'
          });
        }
        else{
          this.starships = response.starships;
        }

      },
      error => {
        this.spinner.hide();

        swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error al obtener los datos desde Mongo',
          confirmButtonText: 'Aceptar'
        });
      }
    );

  }

}
