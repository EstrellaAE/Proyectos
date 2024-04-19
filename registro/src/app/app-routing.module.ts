import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarProyectoComponent } from './componentes/registrar/registrar.component';
import { ProyectoComponent } from './modelos/proyecto/proyecto.component';
import { Pieza } from './modelos/pieza.model';
import { RegistrarPiezaComponent } from './componentes/pieza/pieza.component';
import { AsignarPiezaComponent } from './componentes/asignar-pieza/asignar-pieza.component';
//import { AppRoutingModule } from './app-routing.module';


const routes: Routes = [
  { path: '', redirectTo: '/registrar', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'registrar', component: RegistrarProyectoComponent },
  { path: 'proyecto', component: ProyectoComponent },
  {path: 'pieza', component: RegistrarPiezaComponent},
  {path: 'asignar-pieza', component: AsignarPiezaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

