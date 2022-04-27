import { Component, OnInit, EventEmitter, Injectable, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleComponent } from 'src/app/components/sample/sample-component/sample-component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { Usuario } from 'src/app/shared/models/usuario';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})

export class LoginUsuarioComponent implements OnInit {

  formsGroup: FormGroup;
  public login: string;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.formsGroup = new FormGroup({
      usuario: new FormControl("", [Validators.required]),
      senha: new FormControl("", [Validators.required])
    });
  }

  loginProces(){
    if(this.formsGroup.valid){
      this.api.longin().logar(this.formsGroup.value).subscribe((resposta: any) =>{

        if(resposta){

          localStorage.setItem('token', resposta);
          localStorage.setItem('login', this.login);
          this.router.navigate(['tweets']);
        }

      });
    }
  }
}
