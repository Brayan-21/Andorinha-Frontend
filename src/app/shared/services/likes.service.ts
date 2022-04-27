import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Like } from '../models/like';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor( private http: HttpClient ) { }

  darLike(idTweet: number): Observable<Like> {

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });

      return this.http.get<Like>("http://localhost:8080/andorinha-backend/api/likes/" + idTweet, {headers});
  }
}
