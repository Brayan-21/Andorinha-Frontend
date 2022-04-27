import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Tweet } from 'src/app/shared/models/tweet';
import { Usuario } from 'src/app/shared/models/usuario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  private tweet: Tweet = new Tweet();
  public tweets: Array<Tweet> = new Array<Tweet>();
  public conteudo: string;
  router: any;

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.limparFormulario();
    this.listarTweets(); 
  }

  limparFormulario(): void {
    this.tweet = new Tweet();
    let user: Usuario = new Usuario();
    user.login = localStorage.getItem('login');
    this.tweet.usuario = user;
  }

  listarTweets(): void {
    this.api.tweet().listarTodos().subscribe( tweets => {
      this.tweets = tweets;
    });
  }

  publicar(form: NgForm): void {
    if (!form.valid){
      return alert("Preencha todos os campos.");
    }

    this.api.tweet().inserir(this.tweet).subscribe( t => {
      this.limparFormulario();  
      this.listarTweets();
    });
  }

  darLike(tweet: Tweet): void {
    this.api.curtidas().darLike(tweet.id).subscribe( c => {
      this.listarTweets();
    }, e => {
      alert("Erro ao curtir a publicação.");
    });
  }

  darDeslike(tweet: Tweet): void {
    this.api.deslike().darDeslike(tweet.id).subscribe( d => {
      this.listarTweets();
    }, e => {
      alert("Erro ao descurtir a publicação.");
    });
  }

  verComentarios(idTweet: number) {
    this.router.navigate([`comentarios/${idTweet}`])
  }

  tweetar(): void {
    //chamar o backend

    this.tweet.conteudo = this.conteudo;
    
    let user = new Usuario();
        user.login = localStorage.getItem('login');
    this.tweet.usuario = user;

    this.api.tweet().inserir(this.tweet).subscribe();
  }

}
