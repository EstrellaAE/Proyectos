import { Component } from '@angular/core';
import { Proyecto } from '../../modelos/proyecto/proyecto.model';
import { ProyectoService } from '../../servicios/proyecto/proyecto.service';

@Component({
  selector: 'app-registrar-proyecto',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarProyectoComponent {
  nuevoProyecto: Proyecto = new Proyecto(); // Objeto para almacenar el nuevo proyecto

  constructor(private proyectoService: ProyectoService) {}

  registrarProyecto(): void {
    this.proyectoService.registrarProyecto(this.nuevoProyecto)
      .subscribe(() => {
        alert('Proyecto registrado exitosamente');
        // Puedes redirigir a otra página después de registrar el proyecto
      }, error => {
        console.error('Error al registrar proyecto:', error);
        alert('Ocurrió un error al registrar el proyecto');
      });
  }
}
