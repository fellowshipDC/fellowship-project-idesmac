import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import {ReversePipe} from 'ngx-pipes';
import { FilterByPipe } from 'ngx-pipes';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.styl'],
  providers: [FilterByPipe]
})
export class PublicacionesComponent implements OnInit {
  filteredArr: any[];
  data: any;
  publicacion: any;

  constructor(private filterBy: FilterByPipe, private http: Http) { }



  getData () {
    this.http.get('http://localhost:8888/wp-json/wp/v2/publicaciones?_embed&per_page=100')
    .subscribe((res: Response) => { this.data = res.json();
      if (this.data !== undefined || this.data !== null) {
        this.publicacion = this.data;
      }
    });
  }
  ngOnInit() {
    this.getData();
  }
  filterTodo() {
    if (this.data !== undefined || this.data !== null) {
      this.publicacion = this.data.filter((el) => {
        if (el.id === 8 || el.id === 9 || el.id === 10 || el.id === 11 || el.id === 12 || el.id === 13 || el.id === 14
          || el.id === 16 || el.id === 15 || el.id === 17 || el.id === 24 || el.id === 19 || el.id === 20 || el.id === 22
          || el.id === 23 || el.id === 80 || el.id === 25 || el.id === 27 || el.id === 28 || el.id === 29 || el.id === 30
          || el.id === 31 || el.id === 32 || el.id === 33 || el.id === 34 || el.id === 35 || el.id === 36 || el.id === 37) {
          return true;
        }
      });
    }
  }
  filterAcuerdos() {
    if (this.data !== undefined || this.data !== null) {
      this.publicacion = this.data.filter((el) => {
        if (el.id === 8 || el.id === 9 || el.id === 10) {
          return true;
        }
      });
    }
  }
  filterCalakmul() {
    if (this.data !== undefined || this.data !== null) {
      this.publicacion = this.data.filter((el) => {
        if (el.id === 11 || el.id === 12 || el.id === 13 || el.id === 14) {
          return true;
        }
      });
    }
  }
  filterEcoturismo() {
    if (this.data !== undefined || this.data !== null) {
      this.publicacion = this.data.filter((el) => {
        if (el.id === 16 || el.id === 15) {
          return true;
        }
      });
    }
  }
  filterOrdenamiento() {
    if (this.data !== undefined || this.data !== null) {
      this.publicacion = this.data.filter((el) => {
        if (el.id === 17 || el.id === 24 || el.id === 19 || el.id === 20 || el.id === 22 || el.id === 23
          || el.id === 80 ) {
          return true;
        }
      });
    }
  }
  filterOtros() {
    if (this.data !== undefined || this.data !== null) {
      this.publicacion = this.data.filter((el) => {
        if (el.id === 25 || el.id === 27 || el.id === 28 ) {
          return true;
        }
      });
    }
  }
  filterANPC() {
    if (this.data !== undefined || this.data !== null) {
      this.publicacion = this.data.filter((el) => {
        if (el.id === 29 || el.id === 30 || el.id === 31 || el.id === 32 ) {
          return true;
        }
      });
    }
  }
  filterRiesgo() {
    if (this.data !== undefined || this.data !== null) {
      this.publicacion = this.data.filter((el) => {
        if (el.id === 33 || el.id === 34 || el.id === 35 || el.id === 36 || el.id === 37 ) {
          return true;
        }
      });
    }
  }
}
