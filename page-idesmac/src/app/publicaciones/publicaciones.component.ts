import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as d3 from 'd3';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.styl']
})
export class PublicacionesComponent implements OnInit {

  publicaciones: any;
  data: any;
  constructor(private http: Http) { }
  getData () {
    this.http.get('http://localhost:8888/wp-json/wp/v2/publicaciones')
    .subscribe((res: Response) => this.data = res.json()
  );
  }
  ngOnInit() {
    this.getData();
  }
}
    //d3.csv('./assets/publicaciones.csv',
    //(error, data) => this.publicaciones = (data));
 //acuerdos = data.filter(function (a) {
   //return a.filter("acuerdos");   
 //});
 //console.log(acuerdos);