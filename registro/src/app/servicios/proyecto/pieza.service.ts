import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pieza } from '../../modelos/proyecto/pieza.model';

@Injectable({
  providedIn: 'root'
})
export class PiezaService {
  private apiUrl = 'https://api.example.com/piezas'; // URL de la API para obtener piezas

  constructor(private http: HttpClient) {}

  obtenerPiezasDisponibles(): Observable<Pieza[]> {
    return this.http.get<Pieza[]>(`${this.apiUrl}/disponibles`);
  }

}
