import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.styl']
})
export class PublicacionesComponent implements OnInit {
  q: string;
  publicacion: object[];
  response: object;
  publicaciones: any;
  data: any;

  constructor(private http: Http) { }
  onKey(event: any) {
    this.q = event.target.value;

    this.http.get('http://localhost:8888/wp-json/wp/v2/publicaciones?_emded' + this.q
    ).subscribe((res: Response) => {
      this.response = res.json();
    });
  }

  getData () {
    this.http.get('http://localhost:8888/wp-json/wp/v2/publicaciones?_embed&per_page=100')
    .subscribe((res: Response) => this.response = res.json()
  );
  }
  ngOnInit() {
    this.getData();
  }
}
