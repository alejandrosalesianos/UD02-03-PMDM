import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Corredores {
  nombre: string;
  apellidos: string;
  edad: number;
  curso: string;
  opciones: string; 
}
export interface checkbox{
  marcado : boolean;
}
const DATOS: Corredores[] = [
  {nombre: 'Alejandro', apellidos: 'Martín', edad: 20, curso: '2º DAM', opciones: ""},
  {nombre: 'Pablo', apellidos: 'Seguro', edad: 24, curso: '2º DAM', opciones: ""},
  {nombre: 'Javier', apellidos: 'Navarra', edad: 20, curso: '2º DAM', opciones: ""},
  {nombre: 'Jaime', apellidos: 'Jimenez', edad: 20, curso: '2º DAM', opciones: ""},
  {nombre: 'Vicente', apellidos: 'Bruh', edad: 18, curso: '2º DAM', opciones: ""},
  {nombre: 'Guillermo', apellidos: 'De la cruz', edad: 21, curso: '2º DAM', opciones: ""},
  {nombre: 'Willy', apellidos: 'Wonka', edad: 21, curso: '2º DAM', opciones: ""},
  {nombre: 'Antonio', apellidos: 'Montero', edad: 21, curso: '2º DAM', opciones: ""},
  {nombre: 'Daniel', apellidos: 'Oliva', edad: 20, curso: '2º DAM', opciones: ""},
  {nombre: 'Manolo', apellidos: 'Exposito', edad: 20, curso: '2º DAM', opciones: ""},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tabla',
  styleUrls: ['./tabla.component.css'],
  templateUrl: './tabla.component.html',
})
export class TablaComponent implements AfterViewInit{

  todosMarcados: boolean = false;

  displayedColumns: string[] = ['nombre', 'apellidos', 'edad', 'curso','opciones'];
  datos = new MatTableDataSource(DATOS);
  backup: string[] = ['nombre', 'apellidos', 'edad', 'curso','opciones'];

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit(){
    this.datos.sort = this.sort;

    
  }
  mostrar(event: any, columna: string){
    if (event.checked == false) {
      let i = this.displayedColumns.indexOf(columna);
    if (-1 !== i) {
      this.displayedColumns.splice(i,1)
      console.log(this.displayedColumns)
    }
  }
  else{
    let index2 = this.backup.indexOf(columna);
    this.displayedColumns = [...this.displayedColumns.slice(0,index2),this.backup[index2],...this.displayedColumns.slice(index2)];
    console.log(this.displayedColumns)
  }
}
}
