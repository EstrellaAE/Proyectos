import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProyectoService } from '../../servicios/proyecto.service';
import { Proyecto } from '../../modelos/proyecto.model'; // Asegúrate de importar el modelo adecuado
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Pieza } from '../../modelos/pieza.model';
import { PiezaService } from '../../servicios/pieza.service';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  formulario!: FormGroup;
  proyectosConPiezas: Proyecto[] = []; // Definir el array de proyectos con piezas
  piezasDisponibles: any[] = []; // Definir el array de piezas disponibles
  proyectosPorFecha: Proyecto[] = []; // Definir el array de proyectos por fecha
  piezasNoAsociadas: any[] = []; // Definir el array de piezas no asociadas

  constructor(private fb: FormBuilder, private proyectoService: ProyectoService) {
    this.formulario = this.fb.group({
      tienePiezas: [null],
      fecha: [null]
    });
  }

  ngOnInit(): void {
    // Llama a la función para cargar los proyectos con piezas al iniciar el componente
    //this.cargarProyectosConPiezas();
  }

  async buscarProyectos() {
    const filtros = this.formulario.value;
    const data = await this.proyectoService.filtrar(filtros);
    console.log(filtros);
    // Llama al servicio para buscar proyectos por filtros y asigna los resultados a las propiedades correspondientes
    this.proyectosPorFecha = data.datos;
  }

}
