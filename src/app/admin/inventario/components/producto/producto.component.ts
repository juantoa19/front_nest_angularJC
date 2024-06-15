import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  libros:any[]=[
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"ambientado",librofav:"si",categoria_id:5, estado:"Completo"},


  ];
  cols:any[]=[];


  openNew(){

  }

  editLibros(libr:any){

  }

  deleteLibros(libr:any){

  }

}
