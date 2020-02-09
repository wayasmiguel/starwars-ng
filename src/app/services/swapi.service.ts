import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SwapiService{

  swapi = "https://swapi.co/api/";

  constructor(
    private httpClient : HttpClient
  ){}

  getFilms() : Observable<any>{

    return this.httpClient.get(this.swapi + 'films');

  }

  getFilmInfo(id) : Observable<any>{

    return this.httpClient.get(this.swapi + 'films/' + id);

  }

  getStarshipInfo(id) : Observable<any>{

    return this.httpClient.get(this.swapi + 'starships/' + id);

  }

}
