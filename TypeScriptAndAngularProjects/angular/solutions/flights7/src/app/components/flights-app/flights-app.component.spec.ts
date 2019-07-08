import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsAppComponent } from './flights-app.component';

describe('FlightsAppComponent', () => {
  let component: FlightsAppComponent;
  let fixture: ComponentFixture<FlightsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
