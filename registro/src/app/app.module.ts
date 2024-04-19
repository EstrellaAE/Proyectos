import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    RegistrarPiezaComponent,
    RegistrarProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
