import { Component } from '@angular/core';
import { Proyecto } from '../../modelos/proyecto.model';
import { ProyectoService } from '../../servicios/proyecto.service';

@Component({
  selector: 'app-registrar-proyecto',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarProyectoComponent {
  nuevoProyecto: Proyecto = new Proyecto(); // Objeto para almacenar el nuevo proyecto

  constructor(
    private proyectoService:ProyectoService
  ) {}

  async registrarProyecto(){
    console.log(this.nuevoProyecto);
    const data = await this.proyectoService.crearProyecto(this.nuevoProyecto);
    console.log(data);
  }
}
