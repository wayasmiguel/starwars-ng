import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-my-starships',
  templateUrl: './my-starships.component.html',
  styleUrls: ['./my-starships.component.scss']
})
export class MyStarshipsComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService
  ){}

  ngOnInit() {

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

}
