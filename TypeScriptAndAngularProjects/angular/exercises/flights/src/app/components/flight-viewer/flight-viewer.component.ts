import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FlightDetails} from '../../model/flight-details';

@Component({
  selector: 'app-flight-viewer',
  templateUrl: './flight-viewer.component.html',
  styleUrls: ['./flight-viewer.component.css']
})
export class FlightViewerComponent implements OnInit {
  name = 'FlightViewerComponent';

  flightDetails: FlightDetails[];

  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {
    this.http.get<FlightDetails[]>('http://localhost:8080/flights')
      .subscribe(data => this.flightDetails = data);
  }
  fun() {
    console.log(this.flightDetails);
  }
}
