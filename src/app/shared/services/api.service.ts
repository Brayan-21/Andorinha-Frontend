import { DeslikeService } from './deslike.service';
import { LikesService } from './likes.service';
import { ComentarioService } from './comentario.service';
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { TweetService } from './tweet.service';
import { LocalStorageService } from './local-storage.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private usuarioService: UsuarioService,
              private tweetService: TweetService,
              private localStorageService: LocalStorageService,
              private loginService: LoginService,
              private comentarioService: ComentarioService,
              private likesService: LikesService,
              private deslikeService: DeslikeService) { }

  public usuario(): UsuarioService {
    return this.usuarioService;
  }

  public tweet(): TweetService {
    return this.tweetService;
  }

  public localStorage(): LocalStorageService{
    return this.localStorageService;
  }

  public longin(): LoginService{
    return this.loginService;
  }

  public comentario(): ComentarioService{
    return this.comentarioService;
  }

  public curtidas(): LikesService{
    return this.likesService;
  } 

  public deslike(): DeslikeService{
    return this.deslikeService;
  }

}
