import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-identidad',
  templateUrl: './identidad.component.html',
  styleUrls: ['./identidad.component.styl']
})
export class IdentidadComponent implements OnInit {
  identidad: any;
  data: any;


  constructor(private http: Http) { }
  //'div'.scrollspy({ target: '#navbar-example' })

getData () {
    this.http.get('http://localhost:8888/wp-json/wp/v2/identidad?_embed')
    .subscribe(
      (res: Response) => this.data = res.json()[0]
    );
  }

  ngOnInit() {
    this.getData();
  }
}
