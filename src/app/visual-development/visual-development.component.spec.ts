import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDevelopmentComponent } from './visual-development.component';

describe('VisualDevelopmentComponent', () => {
  let component: VisualDevelopmentComponent;
  let fixture: ComponentFixture<VisualDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
