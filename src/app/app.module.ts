import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilmsComponent } from './components/films/films.component';
import { StarshipsListComponent } from './components/starships/starships-list/starships-list.component';
import { StarshipInfoComponent } from './components/starships/starship-info/starship-info.component';
import { StarshipEditComponent } from './components/starships/starship-edit/starship-edit.component';
import { MyStarshipsComponent } from './components/my-starships/my-starships.component';
import { MyStarshipInfoComponent } from './components/my-starships/my-starship-info/my-starship-info.component';
import { MyStarshipEditComponent } from './components/my-starships/my-starship-edit/my-starship-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    StarshipsListComponent,
    StarshipInfoComponent,
    StarshipEditComponent,
    MyStarshipsComponent,
    MyStarshipInfoComponent,
    MyStarshipEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
