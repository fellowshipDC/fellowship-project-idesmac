import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  posts;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://104.131.30.177/wp-json/wp/v2/posts',
    {}).subscribe((res: Response) => this.posts = res.json());
  }

}
