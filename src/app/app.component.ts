import {Component, OnInit} from '@angular/core';
import { LoginUsuarioComponent } from './modules/login/login-usuario/login-usuario.component';
import {CustomizerService} from './shared/services/customizer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'universal-starterkit';

  constructor(public customize: CustomizerService) { 

  }

  ngOnInit() {

  }
}
