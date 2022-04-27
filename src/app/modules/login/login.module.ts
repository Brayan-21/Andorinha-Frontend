import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColorVersionRoutingModule } from 'src/app/components/sample/sample-routing.module';


@NgModule({
  declarations: [LoginUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ColorVersionRoutingModule
  ]
})
export class LoginModule { }
