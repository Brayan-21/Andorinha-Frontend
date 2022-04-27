import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tweet } from '../models/tweet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resultado } from '../models/util/resultado';
import { TweetSeletor } from '../models/seletor/tweet.seletor';
import { ApiService } from './api.service';

const TWEETS = [
];

@Injectable({
    providedIn: 'root'
  })

  
  export class TweetService {
  
    constructor( private http: HttpClient) { }


    listarTodos(): Observable<Array<Tweet>> {

        let headers = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem("token") });

        return this.http.get<Array<Tweet>>("http://localhost:8080/andorinha-backend/api/tweet", {headers});
    }

    inserir(tweet: Tweet): Observable<Tweet> {

        let headers = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem("token") });

        return this.http.post<Tweet>("http://localhost:8080/andorinha-backend/api/tweet", tweet, {headers});
    }

    pesquisar(seletor: TweetSeletor): Observable<Array<Tweet>> {
        return this.http.get<Array<Tweet>>("http://localhost:8080/andorinha-backend/api/tweet/pesquisar");
    }
}