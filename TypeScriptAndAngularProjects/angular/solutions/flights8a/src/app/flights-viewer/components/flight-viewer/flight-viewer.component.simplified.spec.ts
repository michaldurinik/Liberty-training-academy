import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlightViewerComponent} from './flight-viewer.component';
import {FlightsService} from '../../service/flights.service';
import {Observable, of} from 'rxjs';
import {Flight} from '../../model/flight';
import {HttpClient} from '@angular/common/http';

const stubHttp = {get: () => of([])} as any as HttpClient;

const flightsService = new FlightsService(stubHttp);

describe('FlightViewerComponent Simplified', () => {
  let component: FlightViewerComponent;

  beforeEach(() => {
    component = new FlightViewerComponent(flightsService);

    spyOnProperty(flightsService, 'flights', 'get')
      .and.returnValue(of<Flight[]>([]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should refresh using the flights service when refresh executed', async(() => {
    spyOn(flightsService, 'refresh').and.stub();

    component.refresh();

    expect(flightsService.refresh).toHaveBeenCalled();
  }));
});
