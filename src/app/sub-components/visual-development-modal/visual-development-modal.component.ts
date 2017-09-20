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

    currStep = 0;

    active = true;
    timeElapsed = 8001;

    interval;
    interval2;

    constructor() { }

    pausePlay(){
        if(this.active){
            this.clearAllIntervals();
            this.active = false;
        }else{
            this.active = true;
            this.clearAllIntervals();
            this.interval = setTimeout( () => {
                this.increaseStep();
                this.ngOnInit();
            }, this.timeElapsed);
            this.interval2 = setInterval( () => {
                this.timeElapsed -= 100;
            }, 100);
        }
    }

    clearAllIntervals(){
        clearInterval(this.interval);
        clearInterval(this.interval2);
        this.interval = null;
        this.interval2 = null;
    }

    ngOnInit() {
        this.active = true;
        this.clearAllIntervals();
        this.timeElapsed = 8001;
        this.interval = setInterval( () => {
            this.timeElapsed = 8001;
            this.increaseStep();
        }, 8000);
        this.interval2 = setInterval( () => {
            this.timeElapsed -= 100;
        }, 100);
    }

    increaseStep(){
        this.currStep++;
        this.currStep = this.currStep % 10;
    }
}
