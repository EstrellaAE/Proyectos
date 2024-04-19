import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../../modelos/proyecto/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = 'api/proyectos'; // Endpoint del API

  constructor(private http: HttpClient) {}

  registrarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post<any>(this.apiUrl, proyecto); // Envía el proyecto al servidor
  }

  obtenerProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiUrl);
  }


}
