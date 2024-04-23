import { Injectable } from '@angular/core';
import { clienteAxios } from '../helpers/axios';
import { Pieza } from '../modelos/pieza.model';
import { Proyecto } from '../modelos/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor() { }

  async crearProyecto(proyecto: any) {
    try {
      const { data } = await clienteAxios.post('/proyecto/add', proyecto);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
    }
  }

  async listarProyectos() {
    try {
      const { data } = await clienteAxios.get('/proyecto/list');
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async obtenerProyectoPorId(id: string) {
    try {
      const { data } = await clienteAxios.get(`/proyecto/one/${id}`);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async actualizarProyecto(id: string, proyecto: any) {
    try {
      const { data } = await clienteAxios.put(`/proyecto/edit/${id}, proyecto`);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async eliminarProyecto(id: string) {
    try {
      const { data } = await clienteAxios.delete(`/proyecto/delete/${id}`);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async asignarPieza(piezas:any, id: string) {
    try {
      const url = `/proyecto/agregar-pieza/${id}`;
      const requestBody = { piezas:piezas };
      console.log(piezas)
      const response = await clienteAxios.put(url, {piezas} ); // Enviar piezas como parte del cuerpo
      return response.data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async obtenerProyectosConPiezas(): Promise<any> {
    try {
      const url = `/proyecto/obtenerProyectosConPiezas`;
      const response = await clienteAxios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error al obtener proyectos con piezas:', error);
      throw error;
    }
  }

  async obtenerProyectosPorFecha(): Promise<any> {
    try {
      const url = `proyecto/obtenerProyectosPorFecha`;
      const response = await clienteAxios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error al obtener proyectos por fecha:', error);
      throw error;
    }
  }
}