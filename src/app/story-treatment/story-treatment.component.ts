import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-treatment',
  templateUrl: './story-treatment.component.html',
  styleUrls: ['./story-treatment.component.css']
})
export class StoryTreatmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      let vol: any = document.querySelector('#waterfall');
      vol.volume = 0.2;
  }

}
