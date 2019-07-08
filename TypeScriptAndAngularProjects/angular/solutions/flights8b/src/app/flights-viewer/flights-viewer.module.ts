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
import {DatePickerModule} from '../date-picker/date-picker.module';
import {FlightHomeComponent} from './components/flight-home/flight-home.component';
import {RouterModule, Routes} from '@angular/router';
import {routes} from './routes';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent,
    FlightDetailsComponent,
    FlightUpdateFormComponent,
    FlightHomeComponent
  ],
  providers: [
    FlightsService
  ],
  exports: [
    FlightHomeComponent
  ]
})
export class FlightsViewerModule {
}
