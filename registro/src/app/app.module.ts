import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import { ProyectoComponent } from './modelos/proyecto/proyecto.component';
import { RegistrarPiezaComponent } from './componentes/pieza/pieza.component';
import { RegistrarProyectoComponent } from './componentes/registrar/registrar.component';
import { AsignarPiezaComponent } from './componentes/asignar-pieza/asignar-pieza.component';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ListarSolicitudesComponent } from './componentes/listar-proyectos/listar-proyectos.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './componentes/filtros/filtros.component';


@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    RegistrarPiezaComponent,
    RegistrarProyectoComponent,
    NavBarComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
