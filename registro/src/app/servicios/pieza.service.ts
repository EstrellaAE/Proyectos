import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pieza } from '../modelos/pieza.model';
import { clienteAxios } from '../helpers/axios';

@Injectable({
  providedIn: 'root'
})
export class PiezaService {

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

}
