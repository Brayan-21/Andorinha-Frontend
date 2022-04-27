import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

private urlAutenticacao = environment.url.path; 

  constructor(private http: HttpClient) { }

 logar(data){

    return this.http.post(this.urlAutenticacao, data, {responseType: 'text'});
  } 
}
