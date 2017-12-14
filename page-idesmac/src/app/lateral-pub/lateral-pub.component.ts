import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-lateral-pub',
  templateUrl: './lateral-pub.component.html',
  styleUrls: ['./lateral-pub.component.styl']
})
export class LateralPubComponent implements OnInit {
  q: string;
  publicacion: object[];
  response: object;

  constructor(private http: Http) { }
  ngOnInit() {

  }

}
