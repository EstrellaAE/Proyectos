import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from './modelos/proyecto/proyecto.component';
import { Pieza } from './modelos/pieza.model';
import { RegistrarPiezaComponent } from './componentes/pieza/pieza.component';
import { AsignarPiezaComponent } from './componentes/asignar-pieza/asignar-pieza.component';
import { RegistrarProyectoComponent } from './componentes/registrar/registrar.component';
import { ListarSolicitudesComponent } from './componentes/listar-proyectos/listar-proyectos.component';
import { CommonModule } from '@angular/common';
import { FiltroService } from './servicios/filtro.service';
import { FiltrosComponent } from './componentes/filtros/filtros.component';

const routes: Routes = [
  { path: '', redirectTo: '/registrar', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'registrar', component: RegistrarProyectoComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'proyecto/list', component: ProyectoComponent },
  {path: 'pieza', component: RegistrarPiezaComponent},
  {path: 'asignar-pieza', component: AsignarPiezaComponent},
  {path: 'listar-proyectos', component: ListarSolicitudesComponent},
  { path: 'filtros', component: FiltrosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

