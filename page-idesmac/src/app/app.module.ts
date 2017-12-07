import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MapBoxModule } from 'angular-mapbox/module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { SecunoComponent } from './secuno/secuno.component';
import { SecdosComponent } from './secdos/secdos.component';
import { DestacadoComponent } from './destacado/destacado.component';
import { DifusionComponent } from './difusion/difusion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { EventosComponent } from './eventos/eventos.component';
import { IdentidadComponent } from './identidad/identidad.component';
import { QuienesComponent } from './quienes/quienes.component';
import { MisionComponent } from './mision/mision.component';
import { HistoriaComponent } from './historia/historia.component';
import { IdentbannComponent } from './identbann/identbann.component';
import { IdentcardComponent } from './identcard/identcard.component';
import { VisibilidadComponent } from './visibilidad/visibilidad.component';
import { PrensaComponent } from './prensa/prensa.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { LateralPubComponent } from './lateral-pub/lateral-pub.component';
import { UsumacintaComponent } from './usumacinta/usumacinta.component';
import { PartcomunitariaComponent } from './partcomunitaria/partcomunitaria.component';
import { OrdenamientoComponent } from './ordenamiento/ordenamiento.component';
import { RedesComponent } from './redes/redes.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { MicrositioComponent } from './micrositio/micrositio.component';
import { VideoComponent } from './video/video.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SecunoComponent,
    SecdosComponent,
    DestacadoComponent,
    DifusionComponent,
    ContactoComponent,
    OficinasComponent,
    SuscripcionComponent,
    UbicacionComponent,
    EventosComponent,
    IdentidadComponent,
    QuienesComponent,
    MisionComponent,
    HistoriaComponent,
    IdentbannComponent,
    IdentcardComponent,
    VisibilidadComponent,
    PrensaComponent,
    PublicacionesComponent,
    LateralPubComponent,
    UsumacintaComponent,
    PartcomunitariaComponent,
    OrdenamientoComponent,
    RedesComponent,
    ConocenosComponent,
    MicrositioComponent,
    VideoComponent,
    ColaboradoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    MapBoxModule.forRoot('pk.eyJ1IjoiZGlmdXNpb24taWRlc21hYyIsImEiOiJjajlmc3kxZG8ycWQxMndzNDJ5OXhxam4wIn0.jaLCQVcQqbBi_EpmYDp0FQ')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
