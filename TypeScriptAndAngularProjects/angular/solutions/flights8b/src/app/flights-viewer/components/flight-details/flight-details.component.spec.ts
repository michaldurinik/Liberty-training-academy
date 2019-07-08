import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightDetailsComponent} from './flight-details.component';
import {createComponentStub} from '../../utility/testing.spec';
import {Component, Input} from '@angular/core';

describe('FlightDetailsComponent', () => {
  let component: FlightDetailsComponent;
  let fixture: ComponentFixture<FlightDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlightDetailsComponent,
        // DummyApp,
        createComponentStub('app-flight-update-form', ['flight'])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
