import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-codespace';
  posts : any;
constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.httpService.getPosts().subscribe(
    (response) => { this.posts = response; },
    (error) => { console.log(error); });
  }
}
