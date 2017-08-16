import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTreatmentComponent } from './story-treatment.component';

describe('StoryTreatmentComponent', () => {
  let component: StoryTreatmentComponent;
  let fixture: ComponentFixture<StoryTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
