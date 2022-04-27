import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Deslike } from '../models/deslike';


@Injectable({
  providedIn: 'root'
})
export class DeslikeService {

  constructor( private http: HttpClient ) { }

  darDeslike(idTweet: number): Observable<Deslike> {

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });

      return this.http.get<Deslike>("http://localhost:8080/andorinha-backend/api/deslikes/" + idTweet, {headers});
  }
}
