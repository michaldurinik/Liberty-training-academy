import {Component, OnInit} from '@angular/core';
import {FlightDetails} from '../../model/flight-details';
import {FlightService} from '../../services/flight.service';

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

  constructor(private http: FlightService) {
    http.fetchFlights()
      .subscribe(data => this.flightDetails = data);
  }
}
