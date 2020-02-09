import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SwapiService{

  swapi = "https://swapi.co/api/";
  mongoapi = "http://localhost:3900/api/starships";

  constructor(
    private httpClient : HttpClient
  ){}

  //Swapi

  getFilms() : Observable<any>{

    return this.httpClient.get(this.swapi + 'films');

  }

  getFilmInfo(id) : Observable<any>{

    return this.httpClient.get(this.swapi + 'films/' + id);

  }

  getStarshipInfo(id) : Observable<any>{

    return this.httpClient.get(this.swapi + 'starships/' + id);

  }

  //My Starships - MongoDB

  getMyStarships() : Observable<any>{

    return this.httpClient.get(this.mongoapi);

  }

  storeStarship(starship)  : Observable<any>{

    return this.httpClient.post(this.mongoapi, starship);

  }
  //
  // showStarship(id_starship) : Observable<any>{
  //
  //   return this.httpClient.get(this.mongo + id_starship);
  //
  // }
  //
  //
  // updateStarship(survey) : Observable<any>{
  //
  //   return this.httpClient.put(this.mongo + starship.id_starship, {starship : starship});
  //
  // }
  //
  // destroyStarship(id_starship) : Observable<any>{
  //
  //   return this.httpClient.delete(this.url + id_starship);
  //
  //}

}
