import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-visual-development-modal',
    templateUrl: './visual-development-modal.component.html',
    animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({opacity: 0}),
          animate('500ms 500ms', style({opacity: 1}))
        ]
      ),
      transition(
        ':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0}))
        ]
      )]
    )
  ],
  styleUrls: ['./visual-development-modal.component.css']
})
export class VisualDevelopmentModalComponent implements OnInit {

    currStep = 9;

  constructor() { }

  ngOnInit() {
      setInterval( () => {
          this.currStep++;
          this.currStep = this.currStep % 10;
      }, 8000);
  }

}
