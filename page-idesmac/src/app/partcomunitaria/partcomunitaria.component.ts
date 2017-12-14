import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partcomunitaria',
  templateUrl: './partcomunitaria.component.html',
  styleUrls: ['./partcomunitaria.component.styl']
})
export class PartcomunitariaComponent implements OnInit {

  @Input()
  url: string;

  @Input()
  ref: string;
  constructor() { }

  ngOnInit() {
  }

}
