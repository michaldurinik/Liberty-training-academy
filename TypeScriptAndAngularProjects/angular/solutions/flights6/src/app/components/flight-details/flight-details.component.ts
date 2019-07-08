import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../model/flight';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  @Input() flight: Flight;
  @Output() flightChange =  new EventEmitter<Flight>();

  editedFlight: Flight;

  editMode: boolean;

  ngOnInit() {
    this.editMode = false;
  }

  clearSelected() {
    this.editMode = false;
    this.flightChange.emit(null);
  }

  enterEditMode() {
    this.editMode = true;
    this.editedFlight = this.flight;
  }

  flightUpdated() {
    this.clearSelected();
    this.flightChange.emit(this.flight);
  }
}
