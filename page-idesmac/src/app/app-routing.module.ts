import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent} from './contacto/contacto.component';
import { UbicacionComponent} from './ubicacion/ubicacion.component';
import { EventosComponent} from './eventos/eventos.component';
import { IdentidadComponent } from './identidad/identidad.component';
import { MisionComponent } from './mision/mision.component';
import { VisibilidadComponent } from './visibilidad/visibilidad.component';
import { PrensaComponent } from './prensa/prensa.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { UsumacintaComponent } from './usumacinta/usumacinta.component';
import { PartcomunitariaComponent } from './partcomunitaria/partcomunitaria.component';
import { OrdenamientoComponent } from './ordenamiento/ordenamiento.component';

const routes: Routes = [
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'dondestamos',
    component: UbicacionComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'identidad',
    component: IdentidadComponent
  },
  {
    path: 'mision',
    component: MisionComponent
  },
  {
    path: 'visibilidad',
    component: VisibilidadComponent
  },
  {
    path: 'publicaciones',
    component: PublicacionesComponent
  },
  {
    path: 'publicaciones/usumacinta',
    component: UsumacintaComponent
  },
  {
    path: 'publicaciones/ordenamiento',
    component: OrdenamientoComponent
  },
  {
    path: 'prensa',
    component: PrensaComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
