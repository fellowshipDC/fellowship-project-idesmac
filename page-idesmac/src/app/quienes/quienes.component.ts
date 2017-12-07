import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.styl']
})
export class QuienesComponent implements OnInit {
  identidad: any;
  data: any;


  constructor(private http: Http) { }

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

