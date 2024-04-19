import { Component } from '@angular/core';
import { Pieza } from '../../modelos/pieza.model';
import { PiezaService } from '../../servicios/pieza.service';

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

  constructor(
    private piezaService:PiezaService
  ) {}

  async registrarPieza(){
    console.log('Nueva Pieza:', this.nuevaPieza);
    const data = await this.piezaService.crearPieza(this.nuevaPieza);
    console.log(data);
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
