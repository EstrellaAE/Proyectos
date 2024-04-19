import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../modelos/proyecto/proyecto.model';
import { Pieza } from '../../modelos/proyecto/pieza.model';
import { ProyectoService } from '../../servicios/proyecto/proyecto.service';
import { PiezaService } from '../../servicios/proyecto/pieza.service';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-asignar-pieza',
  templateUrl: './asignar-pieza.component.html',
  styleUrl: './asignar-pieza.component.css'
})
export class AsignarPiezaComponent implements OnInit{
  
  proyectos: Proyecto[] = [];
  piezasDisponibles: Pieza[] = [];
  proyectoSeleccionado?: Proyecto;
  piezasAsignadas: Pieza[] = [];

  constructor(
    private proyectoService: ProyectoService,
    private piezaService: PiezaService
  ) {
    this.proyectos = [];
  }
  

  ngOnInit(): void {
    
    this.obtenerProyectos();
    this.obtenerPiezasDisponibles();
  }

  
  obtenerProyectos(): void {
    this.proyectoService.obtenerProyectos().subscribe((proyectos: Proyecto[]) => {
      this.proyectos = proyectos;
    });
    
  }

  obtenerPiezasDisponibles(): void {
    this.piezaService.obtenerPiezasDisponibles().subscribe((piezas: Pieza[]) => {
      this.piezasDisponibles = piezas;
    });
  }

  seleccionarProyecto(proyecto: Proyecto): void {
    this.proyectoSeleccionado = proyecto;
    this.piezasAsignadas = []; // Limpiar la lista de piezas asignadas al cambiar de proyecto
  }
  

  asignarPieza(pieza: Pieza): void {
    // Agregar la pieza seleccionada a la lista de piezas asignadas
    this.piezasAsignadas.push(pieza);
  }

  guardarAsignacion(): void {
    // Aquí puedes implementar la lógica para guardar las piezas asignadas al proyecto
    if (this.proyectoSeleccionado && this.piezasAsignadas.length > 0) {
      console.log('Piezas asignadas al proyecto:', this.piezasAsignadas);
      // Llamar al servicio para guardar las piezas asignadas
    } else {
      console.warn('Debe seleccionar un proyecto y al menos una pieza.');
    }
  }


}
