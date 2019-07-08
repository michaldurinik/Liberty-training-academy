import {Observable} from 'rxjs';
import {Flight} from '../model/flight';

export abstract class FlightsService {
  abstract flights: Observable<Flight[]>;

  abstract getAllFlights(): Observable<Flight[]>;

  abstract refresh(): void;

  abstract update(flight: Flight);
}
