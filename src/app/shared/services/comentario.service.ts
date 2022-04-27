import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from '../models/comentario';
import { ComentarioSeletor } from '../models/seletor/comentario.seletor';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor( private http: HttpClient ) { }

  listarTodos(): Observable<Array<Comentarios>> {

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });

    return this.http.get<Array<Comentarios>>("http://localhost:8080/andorinha-backend/api/comentario", {headers});
  }

  inserir(comentario: Comentarios): Observable<Comentarios> {

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });

    return this.http.post<Comentarios>("http://localhost:8080/andorinha-backend/api/comentario", comentario, {headers});
  }

  atualizar(comentario: Comentarios): Observable<Comentarios>{

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });

    return this.http.put<Comentarios>("http://localhost:8080/andorinha-backend/api/comentario", comentario, {headers});
  }
}
