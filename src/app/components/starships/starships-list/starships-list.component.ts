import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';
import { Router, ActivatedRoute } from "@angular/router"
import { NgxSpinnerService } from "ngx-spinner";
import swal from'sweetalert2';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
  providers: [SwapiService]
})
export class StarshipsListComponent implements OnInit {

  film = <any>[];
  starships = <any>[];

  constructor(
    private swapiService: SwapiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.spinner.show();

    let id = this.activatedRoute.snapshot.paramMap.get("id");

    this.swapiService.getFilmInfo(id).subscribe(
      response => {
        //console.log(response);
        this.film = response;
        this.getSS();

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

  getSS(){
    for (var i = 0; i < this.film.starships.length; i++) {
       this.getSSData(this.film.starships[i]);
    }
  }

  getSSData(url){
    //console.log(url.split('/')[5]);

    this.swapiService.getStarshipInfo(url.split('/')[5]).subscribe(
      response => {
        this.starships.push({
          id : response.url.split('/')[5],
          name : response.name,
          model : response.model
        });
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

}
