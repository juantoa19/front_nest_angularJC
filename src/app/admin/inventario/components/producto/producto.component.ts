import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  
  categorias = [
    { name: 'Libros Ficcion', code: 'LF' },
    { name: 'Libros Infantiles', code: 'LI' },
    { name: 'Libros Educacion', code: 'LE' },
    { name: 'Libros Religion', code: 'LR' },
    { name: 'Entretenimiento', code: 'ETO' }
];

  products:any[]=[
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"si",librofav:"harryset",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"si",librofav:"harryset",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"si",librofav:"harryset",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"si",librofav:"harryset",categoria_id:5, estado:"Completo"},
    {id:1, titulo:"teclado",autor:"Harry",sinopsis:"si",librofav:"harryset",categoria_id:5, estado:"Completo"}

  ];

  cols:any[]=[];


  openNew(){

  }

  editLibros(libr:any){

  }

  deleteLibros(libr:any){

  }

}
