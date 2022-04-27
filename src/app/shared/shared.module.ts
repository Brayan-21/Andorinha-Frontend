import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToggleFullscreenDirective } from './directives/fullscreen.directive';
import { HttpClientModule } from '@angular/common/http';
import { ColorVersionRoutingModule } from '../components/sample/sample-routing.module';
import { MenuPageComponent } from '../menu/menu-page/menu-page.component';


@NgModule({
  declarations: [ HeaderComponent, FooterComponent, SidebarComponent, ToggleFullscreenDirective,  MenuPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ColorVersionRoutingModule,
  ],
  exports: [ HeaderComponent, FooterComponent, SidebarComponent ]
})
export class SharedModule { }
