import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

colorLocal: string = "blue";

  constructor() { }

  ngOnInit(): void {
  }
  generarAleatorio():String{
    return Math.floor(Math.random()*255).toString(16);
  }

  colorHex():String{
    this.colorLocal= '#' + this.generarAleatorio() + this.generarAleatorio() + this.generarAleatorio(); 
    return this.colorLocal;
  }
}
