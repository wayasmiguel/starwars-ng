import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MongoapiService{

  localhost = "http://localhost:3900";
  production = "https://wayasmiguel.github.io/starwars-backend/";

  mongoapi = this.production + "/api/starships/";

  constructor(
    private httpClient : HttpClient
  ){}

  getMyStarships() : Observable<any>{

    return this.httpClient.get(this.mongoapi);

  }

  storeStarship(starship)  : Observable<any>{

    return this.httpClient.post(this.mongoapi, starship);

  }

  showStarship(id) : Observable<any>{

    return this.httpClient.get(this.mongoapi + id);

  }


  updateStarship(starship) : Observable<any>{

    return this.httpClient.put(this.mongoapi + starship.id, starship);

  }

  destroyStarship(id) : Observable<any>{

    return this.httpClient.delete(this.mongoapi + id);

  }

}
