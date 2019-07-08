import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../model/flight';

@Component({
  selector: '[app-flight-viewer-row]',
  templateUrl: './flight-viewer-row.component.html',
  styleUrls: ['./flight-viewer-row.component.css']
})
export class FlightViewerRowComponent implements OnInit {
  @Input()
  flight: Flight;

  @Output()
  flightSelected = new EventEmitter<Flight>();

  constructor() {
  }

  ngOnInit() {
  }

  selectFlight(): void {
    this.flightSelected.emit(this.flight);
  }
}
