import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SwapiService{

  public url = "https://swapi.co/api/";

  constructor(
    private httpClient : HttpClient
  ){}

  getFilms() : Observable<any>{

    return this.httpClient.get(this.url + 'films');

  }

  getFilmInfo(id) : Observable<any>{

    return this.httpClient.get(this.url + 'films/' + id);

  }

  getStarshipInfo(id) : Observable<any>{

    return this.httpClient.get(this.url + 'starships/' + id);

  }

  // getSurveys() : Observable<any>{
  //
  //   return this._http.get(this.url + 'encuestas');
  //
  // }
  //
  // storeSurvey(survey) : Observable<any>{
  //
  //   return this._http.post(this.url + 'encuestas', {survey : survey});
  //
  // }
  //
  // showSurvey(id) : Observable<any>{
  //
  //   return this._http.get(this.url + 'encuestas/'+id);
  //
  // }
  //
  // updateSurvey(survey) : Observable<any>{
  //
  //   return this._http.put(this.url + 'encuestas/'+survey.id, {survey : survey});
  //
  // }
  //
  // updStatusSurvey(id,status) : Observable<any>{
  //
  //   return this._http.get(this.url + 'encuestas/upd_status/'+id+'/'+status);
  //
  // }
  //
  // delSurvey(id) : Observable<any>{
  //
  //   return this._http.delete(this.url + 'encuestas/'+id);
  //
  // }
  //
  // storeQuestions(survey) : Observable<any>{
  //
  //   return this._http.post(this.url + 'encuesta/store-questions', {survey : survey});
  //
  // }
  //
  // delQuestion(id) : Observable<any>{
  //
  //   return this._http.get(this.url + 'encuesta/preguntas/delete/'+id);
  //
  // }
  //
  // storeQuestionsResults(survey) : Observable<any>{
  //
  //   return this._http.post(this.url + 'encuestas/make/store', {survey});
  //
  // }

}
