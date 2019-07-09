import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {FlightDetails} from '../model/flight-details';
import {FlightService} from './flight.service';

@Injectable()
export class FlightServiceHttp extends FlightService {
  constructor(private http: HttpClient) {
    super();
  }

  fetchFlights(): Observable<FlightDetails[]> {
    console.log('Fetching quotes via service...');

    return this.http.get<FlightDetails[]>('http://localhost:8080/flights');
  }
}
