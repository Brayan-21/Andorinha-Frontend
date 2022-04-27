import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { SampleModule } from './components/sample/sample.module';
import { AndorinhaModule } from './modules/andorinha/andorinha.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './modules/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUsuarioComponent } from './modules/login/login-usuario/login-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    UsuarioModule,
    AndorinhaModule,
    SampleModule,
    HttpClientModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginUsuarioComponent],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
