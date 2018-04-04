import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'comments',
  template: `
     <div *ngFor="let comment of comments">
      <ul>
       <li>
         <div (click)="clickme(comment.text)" >{{comment.text}}</div>
         <comments [comments]="comment.comments" *ngIf="comment.comments"></comments>
       </li>
      </ul>
    </div>
  `,
})
export class CommentComponent {
  @Input() comments;
  @Output() select: EventEmitter<string> = new EventEmitter();
  clickme(text: string) {
    console.log(`Clicked ${text}`)
    this.select.next(text)
  }
}