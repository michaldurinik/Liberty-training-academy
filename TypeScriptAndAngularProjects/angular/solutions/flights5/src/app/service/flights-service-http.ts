import {FlightsService} from './flights-service';
import {Observable} from 'rxjs';
import {Flight} from '../model/flight';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

const server_url = environment.server_url;

@Injectable()
export class FlightsServiceHttp extends FlightsService {
    private flightsSubject: BehaviorSubject<Flight[]>;

    constructor(private http: HttpClient) {
        super();
        this.flightsSubject = new BehaviorSubject<Flight[]>([]);
        this.refresh();
    }

    get flights(): Observable<Flight[]> {
        return this.flightsSubject;
    }

    getAllFlights(): Observable<Flight[]> {
        return this.http.get<any[]>(server_url)
            .pipe(map(json => json.map(Flight.fromJson)));
    }

    refresh() {
        return this.getAllFlights()
            .subscribe(flights => this.flightsSubject.next(flights));
    }
}
