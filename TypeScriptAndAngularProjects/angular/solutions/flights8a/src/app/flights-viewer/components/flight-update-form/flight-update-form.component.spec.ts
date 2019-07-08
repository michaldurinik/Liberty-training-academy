import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightUpdateFormComponent} from './flight-update-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('FlightUpdateFormComponent', () => {
  let component: FlightUpdateFormComponent;
  let fixture: ComponentFixture<FlightUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        FlightUpdateFormComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
