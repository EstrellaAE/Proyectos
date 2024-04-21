import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProyectoService } from '../../servicios/proyecto.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Pieza } from '../../modelos/pieza.model';
import { PiezaService } from '../../servicios/pieza.service';
import { Proyecto } from '../../modelos/proyecto.model';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';
import { FiltroService } from '../../servicios/filtro.service'; // Importa FiltroService
import { Route } from '@angular/router';

@Component({
  selector: 'app-listar-solicitudes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './listar-proyectos.component.html',
  styleUrl: './listar-proyectos.component.css'
})
export  class ListarSolicitudesComponent {
 
  nombreEmpresaForm!: FormGroup;
  solicitudes:Array<any>; 
  isEditar:boolean;
  editarSoli:any;
  formularioEdit!: FormGroup;

  constructor(private formBuilder: FormBuilder, private proyectoService:ProyectoService) {
    this.solicitudes = new Array();
    this.isEditar = false;
   }

  async ngOnInit() {
    this.nombreEmpresaForm = this.formBuilder.group({
      nombreEmpresa: ['', Validators.required]
    });
    console.log(this.solicitudes);
    this.inicializarFormulario();
    this.solicitudes = await this.proyectoService.listarProyectos(); //cargar datos
  }
  
  
  // enviar nombre de empresa
  async onSubmit() {
    if (this.nombreEmpresaForm.valid) {
      // Aquí puedes enviar los datos del formulario
      console.log(this.nombreEmpresaForm.value);
      //const data = await this.proyectoService.listarProyectos();
      //this.solicitudes = data.datos;
      console.log(this.solicitudes);
      //console.log(data);
      this.isEditar = false;
    } else {
      // Aquí puedes manejar la validación del formulario
      console.log("El formulario no es válido");
    }
  }
  
  // boton editar
  async editarSolicitud(id:string){
    console.log(id);
    this.isEditar = true;
    //this.editarSoli= await this.proyectoService.obtenerUnaSolicitud(id);
    console.log(this.editarSoli);
    // cargar formulario
    this.cargarDatosExistente();
  }
  
  //iniciar el formulario
  inicializarFormulario() {
    this.formularioEdit = this.formBuilder.group({
      NomEmpresa: ['', Validators.required],
      Perfil: ['', Validators.required],
      Cantidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  //cargar datos enel formulario
  cargarDatosExistente() {
    this.formularioEdit.patchValue({
      NomEmpresa: this.editarSoli.NomEmpresa,
      Perfil: this.editarSoli.Perfil,
      Cantidad: this.editarSoli.Cantidad
    });
  }
  
  // enviar cambios
  async editSubmit (){
    console.log(this.formularioEdit.value);
    // implementar logica para gardar cambios
    //const soli = await this.solicitudesServices.editarDolicitud(this.editarSoli._id,this.formularioEdit.value);
    //console.log(soli);
    //console.log(soli);
  }

  async borrarSolicitud(id:string){
    // implementar logica para gardar cambios
    //const soli = await this.solicitudesServices.borraSolicitud(id);
  //  console.log(soli);
  }
}