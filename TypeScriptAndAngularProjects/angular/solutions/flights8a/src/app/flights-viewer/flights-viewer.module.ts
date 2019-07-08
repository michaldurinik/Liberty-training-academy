import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {FlightViewerRowComponent} from './components/flight-viewer-row/flight-viewer-row.component';
import {FlightDetailsComponent} from './components/flight-details/flight-details.component';
import {FlightUpdateFormComponent} from './components/flight-update-form/flight-update-form.component';
import {FlightsService} from './service/flights.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent,
    FlightDetailsComponent,
    FlightUpdateFormComponent
  ],
  providers: [
    FlightsService
  ],
  exports: [
    FlightViewerComponent
  ]
})
export class FlightsViewerModule {
}
