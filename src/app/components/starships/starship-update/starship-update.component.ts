import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../../services/swapi.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import swal from'sweetalert2';

@Component({
  selector: 'app-starship-update',
  templateUrl: './starship-update.component.html',
  styleUrls: ['./starship-update.component.scss'],
  providers: [SwapiService]
})
export class StarshipUpdateComponent implements OnInit {

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
        this.starship = response;

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

  extractIdURL(index){
    return this.starship.url.split('/')[5];
  }

}
