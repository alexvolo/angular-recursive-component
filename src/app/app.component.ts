import { Component } from '@angular/core';
import { comments } from './comments/comments-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';
  commentsData = comments;

  itemSelected(text: string) {
    console.log(`Component's item selected ${text}`)
  }
}
