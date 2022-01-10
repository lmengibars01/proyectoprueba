import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './inicio/inicio.component';
const rutas:Routes = [
  {path:'listado-libros', component: LibrosComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ColoresComponent,
    FirmaComponent,
    
    LibrosComponent,
         CabeceraComponent,
         ServiciosComponent,
         InicioComponent 
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
