import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {FlightsAppComponent} from './flights-app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {createComponentStub} from '../flights-viewer/utility/testing.spec';
import {Location} from '@angular/common';

const flightsViewerComponent = createComponentStub('app-flight-viewer');
const welcomeComponent = createComponentStub('app-welcome');

describe('FlightsAppComponent', () => {
  let component: FlightsAppComponent;
  let fixture: ComponentFixture<FlightsAppComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: 'flights', component: flightsViewerComponent},
        {path: '', component: flightsViewerComponent}
      ])],
      declarations: [
        FlightsAppComponent,
        flightsViewerComponent,
        welcomeComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(FlightsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home when nav clicked', fakeAsync(() => {
    // The RoutingTestingModule simplifies working with the Router
    const homeLink = fixture.nativeElement.querySelector('button:nth-of-type(1)');

    homeLink.click();
    tick();

    expect(location.path()).toEqual('/');
  }));

  it('should navigate to flights when nav clicked', fakeAsync(() => {
    const homeLink = fixture.nativeElement.querySelector('button:nth-of-type(2)');

    homeLink.click();
    tick();

    expect(location.path()).toEqual('/flights');
  }));
});
