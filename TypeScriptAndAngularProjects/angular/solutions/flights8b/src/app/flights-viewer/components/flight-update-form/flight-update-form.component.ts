import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Flight} from '../../model/flight';
import {createRequiredRegexValidator} from '../../utility/validators';
import {FlightsService} from '../../service/flights.service';

@Component({
  selector: 'app-flight-update-form',
  templateUrl: './flight-update-form.component.html',
  styleUrls: ['./flight-update-form.component.css']
})
export class FlightUpdateFormComponent implements OnInit, OnChanges {
  @Input() flight: Flight;
  @Output() flightUpdated = new EventEmitter<Flight>();

  updateForm: FormGroup;

  minLength = 3;

  constructor(private formBuilder: FormBuilder,
              private flightsService: FlightsService) {
    this.updateForm = formBuilder.group({
      flightNumber: ['', createRequiredRegexValidator(/^[0-9]{3}$/)],
      flightOrigin: ['', createRequiredRegexValidator(/^[a-zA-Z ]+$/)],
      flightDestination: ['', createRequiredRegexValidator(/^[a-zA-Z ]+$/)],
      departureTime: ['', Validators.required],
      arrivalTime: ['', Validators.required]
    }, {validator: this.airportsDifferentValidator});
  }

  ngOnInit() {
    // We don't really want to update the model until the end
    // But we can react to chnages
    //
    // this.updateForm
    //     .valueChanges
    //     .filter(() => this.updateForm.valid)
    //     .subscribe(values => {
    //         this.resetModel(values)
    //     });
  }

  get flightNumber() {
    return this.updateForm.get('flightNumber');
  }

  get flightOrigin() {
    return this.updateForm.get('flightOrigin');
  }

  get flightDestination() {
    return this.updateForm.get('flightDestination');
  }

  get departureTime() {
    return this.updateForm.get('departureTime');
  }

  get arrivalTime() {
    return this.updateForm.get('arrivalTime');
  }

  ngOnChanges() {
    this.resetForm(this.flight);
  }

  updateFlight(): void {
    console.log('Update of flight complete');
    this.resetModel(this.updateForm.value);
    this.flightsService.update(this.flight)
      .subscribe(() => this.flightUpdated.emit(this.flight));
  }

  private resetForm(flight: Flight): void {
    this.updateForm.setValue({
      flightNumber: flight.number,
      flightOrigin: flight.origin,
      flightDestination: flight.destination,
      departureTime: flight.departure,
      arrivalTime: flight.arrival
    });
  }

  private resetModel(values: any): void {
    this.flight.number = values.flightNumber;
    this.flight.origin = values.flightOrigin;
    this.flight.destination = values.flightDestination;
    this.flight.departure = new Date(values.departureTime);
    this.flight.arrival = new Date(values.arrivalTime);
  }

  airportsDifferentValidator(fg: FormGroup) {
    if (fg.get('flightOrigin').value === fg.get('flightDestination').value) {
      return {identicalAirports: true};
    }
  }
}
