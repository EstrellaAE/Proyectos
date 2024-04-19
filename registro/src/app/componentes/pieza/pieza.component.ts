import { Component } from '@angular/core';
import { Pieza } from '../../modelos/proyecto/pieza.model';
import { Proyecto } from '../../modelos/proyecto/proyecto.model';
import { ProyectoService } from '../../servicios/proyecto/proyecto.service';

@Component({
  selector: 'app-registrar-pieza',
  templateUrl: './pieza.component.html',
  styleUrls: ['./pieza.component.css'],
})

export class RegistrarPiezaComponent {
  nuevaPieza: Pieza = {
    nombre: '',
    descripcion: '',
    marca: '',
    tipo: ''
  };

  constructor() {}

  registrarPieza(): void {
    console.log('Nueva Pieza:', this.nuevaPieza);
    // Limpia el formulario después de enviar
    this.resetForm();
  }

  resetForm(): void {
    this.nuevaPieza = {
      nombre: '',
      descripcion: '',
      marca: '',
      tipo: ''
    };
  }
}
