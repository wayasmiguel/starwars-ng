import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import swal from'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-my-starships',
  templateUrl: './my-starships.component.html',
  styleUrls: ['./my-starships.component.scss'],
  providers: [SwapiService]
})
export class MyStarshipsComponent implements OnInit {

  starships = <any>[];

  constructor(
    private swapiService: SwapiService,
    private spinner: NgxSpinnerService
  ){}

  ngOnInit() {

    this.spinner.show();

    this.swapiService.getMyStarships().subscribe(
      response => {
        //console.log(response);

        if(response.status == 'success'){
          this.starships = response.starships;
        }

        if(response.status == 'error'){
          swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error al obtener los datos desde Mongo',
            confirmButtonText: 'Aceptar'
          });
        }


        this.spinner.hide();
      }
    );

  }

}
