import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDevelopmentModalComponent } from './visual-development-modal.component';

describe('VisualDevelopmentModalComponent', () => {
  let component: VisualDevelopmentModalComponent;
  let fixture: ComponentFixture<VisualDevelopmentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualDevelopmentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualDevelopmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
