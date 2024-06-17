import { Component, inject } from '@angular/core';
import { LibroService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  private libroService = inject(LibroService)
  cities: any = [
    { name: 'Libro Ficcion', code: 'LF' },
    { name: 'Libro Infantil', code: 'LI' },
    { name: 'Libro Educacion', code: 'LE' },
    { name: 'Libro Religion', code: 'LR' },
    { name: 'Entretenimiento', code: 'ETO' }
  ]
  libros: any[] = [];
  cols: any[] = [];

  constructor() {
    this.libroService.funListar().subscribe(
      (res: any) => {
        this.libros = res.data
      }
    )
  }
  openNew() {

  }
  editLibros(libr: any) {

  }
  deleteLibros(libr: any) {

  }
}