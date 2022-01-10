import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  _libro = [
    {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
    {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
    {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
    ]
 verAutor='';
    showAuthor(_libro: any){
      this.verAutor = 'Escrito por: ' + _libro.autor;
      alert(this.verAutor)
      console.log(_libro.titulo, 'escrito por', _libro.autor)
      }
      
  constructor() { 
 
  }

  ngOnInit(): void {
  }
  


    

  
}
