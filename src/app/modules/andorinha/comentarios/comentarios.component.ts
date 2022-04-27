import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comentarios } from 'src/app/shared/models/comentario';
import { ComentarioSeletor } from 'src/app/shared/models/seletor/comentario.seletor';
import { Tweet } from 'src/app/shared/models/tweet';
import { Usuario } from 'src/app/shared/models/usuario';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  public comentario: Comentarios = new Comentarios();

  public comentarios: Array<Comentarios> = new Array<Comentarios>();

  public seletor: ComentarioSeletor = new ComentarioSeletor();

  public tweet: Tweet = new Tweet();

  public usuario: Usuario = new Usuario();

  public conteudo: string;

  constructor( private api: ApiService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.listarComentarios();
  }


  listarComentarios(): void {
    this.api.comentario().listarTodos().subscribe( comentarios => {
        this.comentarios = comentarios;
    });
  }

  comentar(form: NgForm) {
    if (!form.valid){
      return alert("Preencha todos os campos.");
    }

    this.usuario.login = localStorage.getItem('login');
    this.tweet.usuario = this.usuario;

    this.comentario.conteudo = this.conteudo;
    this.comentario.data = this.tweet.data;
    this.comentario.tweet = this.tweet;
    this.comentario.usuario = this.usuario;

    this.api.comentario().inserir(this.comentario).subscribe();
  }
}
