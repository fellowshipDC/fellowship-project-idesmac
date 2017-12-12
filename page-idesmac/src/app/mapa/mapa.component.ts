import { Component, OnInit } from '@angular/core';
declare var mapboxgl: any;
declare var legend: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.styl']
})
export class MapaComponent implements OnInit {

municipios: any;
  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGlmdXNpb24taWRlc21hYyIsImEiOiJjajlmc3kxZG8ycWQxMndzNDJ5OXhxam4wIn0.jaLCQVcQqbBi_EpmYDp0FQ';
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/difusion-idesmac/cj9ixx4bfb9nn2smyg6ptmkto'
    });
    map.on ('load', function() {
        var layers = ['0-10', '10-20', '20-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
        var colors = ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026'];

        for ( var i = 0; i < layers.length; i++) {
          var layer = layers[i];
          var color = colors[i];
          var item = document.createElement('div');
          var key = document.createElement('span');
          key.className = 'legend-key';
          key.style.backgroundColor = color;

          var value = document.createElement('span');
          value.innerHTML = layer;
          item.appendChild(key);
          item.appendChild(value);
          legend.appendChild(item);
        }

        map.on('mousemove', function(e) {
          const municipios = map.queryRenderedFeatures(e.point, {
            layers: ['proyectos-0kdk92']
          });
          if (municipios.length > 0) {
            document.getElementById('pd').innerHTML = '<h3><strong>' + municipios[0].properties.nombre + '</strong></h3><p><strong><em>' +
             municipios[0].properties.Proyecto + '</strong></em></p>';
          } else {
            document.getElementById('pd').innerHTML = '<p>¡Pasa el mouse en el municipio coloreado!</p>';
          }
        });
      });
    map.getCanvas().style.cursor = 'default';

    }
}
