import {Component, Input, OnInit} from '@angular/core';
import {FlightDetails} from '../../model/flight-details';

@Component({
  selector: '[app-flight-viewer-row]',
  templateUrl: './flight-viewer-row.component.html',
  styleUrls: ['./flight-viewer-row.component.css']
})
export class FlightViewerRowComponent implements OnInit {
  @Input()
  flight: FlightDetails;

  constructor() { }

  ngOnInit() {
  }
}
