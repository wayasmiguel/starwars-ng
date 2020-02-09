import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import swal from'sweetalert2';

@Component({
  selector: 'app-starship-info',
  templateUrl: './starship-info.component.html',
  styleUrls: ['./starship-info.component.scss'],
  providers: [SwapiService]
})
export class StarshipInfoComponent implements OnInit {

  starship = <any>[];

  constructor(
    private swapiService: SwapiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.spinner.show();

    let id = this.activatedRoute.snapshot.paramMap.get("id");

    this.swapiService.getStarshipInfo(id).subscribe(
      response => {
        //console.log(response);
        this.starship = response;
        this.starship.id = this.extractIdURL();

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

  extractIdURL(){
    return this.starship.url.split('/')[5];
  }

}
