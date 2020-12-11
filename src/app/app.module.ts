import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import { AppRoutingModule } from './app-routing.module';



//Servicios


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MatematicasComponent } from './components/matematicas/matematicas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MatematicasComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
