import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  private baseUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  obtenerProyectosConPiezas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/proyectos-con-piezas`);
  }

  obtenerPiezasDisponibles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/piezas-disponibles`);
  }

  buscarProyectosPorFecha(fecha: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/proyectos-por-fecha?fecha=${fecha}`);
  }

  obtenerPiezasNoAsociadas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/piezas-no-asociadas`);
  }
}
