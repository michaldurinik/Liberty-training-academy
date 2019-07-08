import {Component, OnInit} from '@angular/core';
import {Flight} from '../../model/flight';
import {FlightsService} from '../../service/flights-service';

@Component({
  selector: 'app-flight-viewer',
  templateUrl: './flight-viewer.component.html',
  styleUrls: ['./flight-viewer.component.css']
})
export class FlightViewerComponent implements OnInit {
  name = 'FlightViewerComponent';
  flights: Flight[];
  selectedFlight: Flight = null;

  ngOnInit(): void {
    this.flightsService.flights
      .subscribe(flights => this.flights = flights);
  }

  constructor(private flightsService: FlightsService) {
  }

  refresh() {
    this.flightsService.refresh();
  }

  clear() {
    this.flights = [];
  }

  selectFlight(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
