import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as L from 'leaflet';
import { municipios } from './municipios';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.styl']
})
export class UbicacionComponent implements OnInit {
mymap;

  constructor() { }
  mapInit() {
   this.mymap = L.map('mapid').setView([16.5597712, -93.4427108], 7);  // coordenadas y zoom
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGlmdXNpb24taWRlc21hYyIsImEiOiJjajlmc3kxZG8ycWQxMndzNDJ5OXhxam4wIn0.jaLCQVcQqbBi_EpmYDp0FQ'
}).addTo(this.mymap);

var circle = L.circle([16.7, -92.67], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(this.mymap);

circle.bindPopup("<b>Oficina IDESMAC</b><br>Pincipal.").openPopup();
}

  ngOnInit() {
    this.mapInit();
  }
}
