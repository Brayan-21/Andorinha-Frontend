import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Resultado } from '../models/util/resultado';
import { Observable, of } from 'rxjs';
import {UsuarioSeletor} from '../models/seletor/usuario.seletor';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const USUARIOS = [
];

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  inserir(usuario: Usuario): Observable<Usuario> {

    let headers = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("token") });

    return this.http.post<Usuario>("http://localhost:8080/andorinha-backend/api/usuario", usuario, {headers});
  }

  pesquisar(seletor: UsuarioSeletor): Observable<Array<Usuario>> {

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem("token") });

    return this.http.post<Array<Usuario>>("http://localhost:8080/andorinha-backend/api/usuario/pesquisar", seletor, {headers});
  }

  private paginar( array: Array<Usuario>, limite: number, pagina: number ): Array<Usuario>{
    return array.slice( (pagina - 1) * limite, (pagina) * limite);
  }
}
