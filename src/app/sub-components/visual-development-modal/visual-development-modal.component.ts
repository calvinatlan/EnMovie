import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-development-modal',
  templateUrl: './visual-development-modal.component.html',
  styleUrls: ['./visual-development-modal.component.css']
})
export class VisualDevelopmentModalComponent implements OnInit {

    currStep = 0;

  constructor() { }

  ngOnInit() {
      setInterval( () => {
          this.currStep++;
          this.currStep = this.currStep % 10;
      }, 8000);
  }

}
