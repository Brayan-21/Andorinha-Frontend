import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.scss']
})
export class UsuarioDetalheComponent implements OnInit {

  usuario: Usuario;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  inserirUsuario(){

    this.api.usuario().inserir(this.usuario).subscribe();
    
  }

}
