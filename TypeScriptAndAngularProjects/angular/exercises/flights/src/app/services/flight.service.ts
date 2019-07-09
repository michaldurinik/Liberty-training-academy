import {FlightDetails} from '../model/flight-details';
import {Observable} from 'rxjs';

export abstract class FlightService {
  abstract fetchFlights(): Observable<FlightDetails[]>;
}
