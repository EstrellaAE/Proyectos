import { Component, OnInit } from '@angular/core';
import { FiltroService } from '../../servicios/filtro.service'; // Importa FiltroService
import { Route } from '@angular/router';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  proyectosConPiezas: any[] = [];
  piezasDisponibles: any[] = [];
  proyectosPorFecha: any[] = [];
  piezasNoAsociadas: any[] = [];

  constructor(private filtroService: FiltroService) { } // Inyecta FiltroService en lugar de ProyectoService

  ngOnInit(): void {
    this.obtenerProyectosConPiezas();
    this.obtenerPiezasDisponibles();
  }

  obtenerProyectosConPiezas() {
    this.filtroService.obtenerProyectosConPiezas().subscribe(
      (data: any[]) => {
        this.proyectosConPiezas = data;
      },
      (error) => {
        console.error('Error al obtener proyectos con piezas:', error);
      }
    );
  }

  obtenerPiezasDisponibles() {
    this.filtroService.obtenerPiezasDisponibles().subscribe(
      (data: any[]) => {
        this.piezasDisponibles = data;
      },
      (error) => {
        console.error('Error al obtener piezas disponibles:', error);
      }
    );
  }

  buscarProyectosPorFecha(fecha: string) {
    this.filtroService.buscarProyectosPorFecha(fecha).subscribe(
      (data: any[]) => {
        this.proyectosPorFecha = data;
      },
      (error) => {
        console.error('Error al buscar proyectos por fecha:', error);
      }
    );
  }

  obtenerPiezasNoAsociadas() {
    this.filtroService.obtenerPiezasNoAsociadas().subscribe(
      (data: any[]) => {
        this.piezasNoAsociadas = data;
      },
      (error) => {
        console.error('Error al obtener piezas no asociadas:', error);
      }
    );
  }
}
