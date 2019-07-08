import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../model/flight';
import {ActivatedRoute} from '@angular/router';
import {FlightsService} from '../../service/flights.service';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  @Input() flight: Flight;
  @Output() flightChange = new EventEmitter<Flight>();

  editedFlight: Flight;
  editMode: boolean;

  constructor(private route: ActivatedRoute,
              private flightService: FlightsService) {
    this.route.params
      .pipe(
        map(x => x.number),
        switchMap(x => this.flightService.get(Number(x))))
      .subscribe(flight => this.flight = flight);
  }

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
