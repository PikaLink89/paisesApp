import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],

  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule //Necesario importar el archivo de rutas para que sidebar lo pueda ver
  ]
})
export class SharedModule { }
