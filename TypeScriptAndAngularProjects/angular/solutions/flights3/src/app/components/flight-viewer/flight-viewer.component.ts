import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Flight} from '../../model/flight';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-flight-viewer',
  templateUrl: './flight-viewer.component.html',
  styleUrls: ['./flight-viewer.component.css']
})
export class FlightViewerComponent implements OnInit {
  name = 'FlightViewerComponent';

  flights: Flight[];

  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:8080/flights')
      .pipe(map(jsonArray => jsonArray.map(x => new Flight(x))))
      .subscribe(jsonAsText => this.flights = jsonAsText);
  }
}
