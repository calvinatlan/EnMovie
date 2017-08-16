import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLogoComponent } from './en-logo.component';

describe('EnLogoComponent', () => {
  let component: EnLogoComponent;
  let fixture: ComponentFixture<EnLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
