import {Observable} from 'rxjs';
import {Flight} from '../model/flight';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map, tap} from 'rxjs/operators';

const server_url = environment.server_url;

@Injectable()
export class FlightsService {
  private flightsSubject: BehaviorSubject<Flight[]>;

  constructor(private http: HttpClient) {
    this.flightsSubject = new BehaviorSubject<Flight[]>([]);
    this.refresh();
  }

  get flights(): Observable<Flight[]> {
    return this.flightsSubject;
  }

  get count(): Observable<number> {
    return this.flightsSubject.pipe(map(x => x.length));
  }

  getAllFlights(): Observable<Flight[]> {
    return this.http.get<any[]>(server_url)
      .pipe(map(json => json.map(Flight.fromJson)));
  }

  refresh(): void {
    this.getAllFlights()
      .subscribe(flights => this.flightsSubject.next(flights));
  }

  update(flight: Flight): Observable<number> {
    return this.http.put<number>(server_url + '/' + flight.number, flight)
      .pipe(tap(x => this.refresh()));
  }

  get(value: number): Observable<Flight> {
    return this.http.get<any>(server_url + `/${value}`)
      .pipe(map(Flight.fromJson));
  }
}
