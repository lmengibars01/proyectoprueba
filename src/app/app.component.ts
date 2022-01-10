import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoprueba';
  condicion:boolean = false;
  dias_semana: string ='';
  vblecolor: string ='';
  color: string='';
  activoyellow:string='';

  libros:Array<string>= ["Harry potter", "Los 7 habitos", "La celestina"];
  

 
    libros1 = [
    {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
    {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
    {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
    ]
    

    
}
