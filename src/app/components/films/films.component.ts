import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { NgxSpinnerService } from "ngx-spinner";
import swal from'sweetalert2';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [SwapiService]
})
export class FilmsComponent implements OnInit {

  films = <any>[];

  constructor(
    private swapiService: SwapiService,
    private spinner: NgxSpinnerService
  ){}

  ngOnInit() {

    this.spinner.show();

    this.swapiService.getFilms().subscribe(

      response => {
        //console.log(response.results);
        this.films = response.results.sort(this.dynamicSort('episode_id'));

        setTimeout(() => {
          this.spinner.hide();
        }, 5000);
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

  dynamicSort(property) {
     return function(a, b) {
         return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
     }
  }

  extractIdURL(index){
    return this.films[index].url.split('/')[5];
  }

}
