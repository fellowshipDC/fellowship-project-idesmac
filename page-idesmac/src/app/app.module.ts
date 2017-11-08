import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MapBoxModule.forRoot('pk.eyJ1IjoiZGlmdXNpb24taWRlc21hYyIsImEiOiJjajlmc3kxZG8ycWQxMndzNDJ5OXhxam4wIn0.jaLCQVcQqbBi_EpmYDp0FQ')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
