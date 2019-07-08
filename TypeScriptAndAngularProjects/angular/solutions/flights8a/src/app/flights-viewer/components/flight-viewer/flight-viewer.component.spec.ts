import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightViewerComponent} from './flight-viewer.component';
import {createComponentStub} from '../../utility/testing.spec';
import {FlightsService} from '../../service/flights.service';
import {Observable, of} from 'rxjs';
import {Flight} from '../../model/flight';
import {HttpClient} from '@angular/common/http';

const stubHttp = {get: () => of([])} as any as HttpClient;

const flightsService = new FlightsService(stubHttp);

describe('FlightViewerComponent', () => {
  let component: FlightViewerComponent;
  let fixture: ComponentFixture<FlightViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlightViewerComponent,
        createComponentStub('app-flight-details', ['flight'], ['flightChange']),
        createComponentStub('[app-flight-viewer-row]', ['flight'], ['flightSelected'])
      ],
      providers: [
        {provide: FlightsService, useValue: flightsService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    spyOnProperty(flightsService, 'flights', 'get').and.returnValue(of<Flight[]>([]));

    fixture = TestBed.createComponent(FlightViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should refresh using the flights service when refresh executed', async () => {
    spyOn(flightsService, 'refresh').and.stub();

    component.refresh();

    expect(flightsService.refresh).toHaveBeenCalled();
  });

  it('Should clear flights', async () => {
    component.flights = [new Flight()];
    component.selectedFlight = new Flight();

    component.clear();

    expect(component.flights).toEqual([]);
    expect(component.selectedFlight).toEqual(null);
  });

  it('Should select flight', async () => {
    const expectedFlight = new Flight();

    component.selectFlight(expectedFlight);

    expect(component.selectedFlight).toBe(expectedFlight);
  });
});
