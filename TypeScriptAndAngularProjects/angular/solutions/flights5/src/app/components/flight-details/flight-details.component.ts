import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../model/flight';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  @Input()
  flight: Flight;

  clearSelected() {
    this.flight = null;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
