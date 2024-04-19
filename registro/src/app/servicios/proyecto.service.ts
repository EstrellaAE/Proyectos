import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto.model';
import { clienteAxios } from '../helpers/axios'; // Para hacer peticiones http

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = 'api/proyectos'; // Endpoint del API

  constructor() {}

  async crearProyecto(proyecto:any){
    try {
      // almacenar en db
      const { data } = await clienteAxios.post('/proyecto/add',proyecto);
      console.log(data);
      return data;
    }catch(error){
      console.log("Error Agular");
    }
  }
  

}
