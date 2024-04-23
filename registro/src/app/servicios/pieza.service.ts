import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pieza } from '../modelos/pieza.model';
import { clienteAxios } from '../helpers/axios';

@Injectable({
  providedIn: 'root'
})
export class PiezaService {
  URL_API='http://localhost:3000/pieza/';
  constructor() {}

  async crearPieza(pieza:any){
    try {
      // almacenar en db
      const { data } = await clienteAxios.post('/pieza/add',pieza);
      console.log(data);
      return data;
    }catch(error){
      console.log("Error Agular");
    }
  }

  async consultarPiezas(): Promise<Pieza[]> {
    try {
      const response = await clienteAxios.get<Pieza[]>('/pieza/obtener');
      const piezas = response.data; // Acceder a la propiedad 'data' para obtener las piezas
      console.log('Piezas obtenidas:', piezas);
      return piezas;
    } catch (error) {
      console.error('Error al consultar piezas:', error);
      throw new Error('Error al consultar piezas'); // Manejar el error de manera más específica según tu aplicación
    }
  }

}
