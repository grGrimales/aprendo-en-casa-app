import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatematicasComponent } from './components/matematicas/matematicas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'matematicas', component: MatematicasComponent},
  { path: 'estadisticas', component: EstadisticasComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
