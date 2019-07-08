import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import {FlightViewerRowComponent} from './components/flight-viewer-row/flight-viewer-row.component';
import {FlightsService} from './service/flights-service';
import {FlightsServiceHttp} from './service/flights-service-http';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightUpdateFormComponent } from './components/flight-update-form/flight-update-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent,
    FlightDetailsComponent,
    FlightUpdateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: FlightsService, useClass: FlightsServiceHttp}
  ],
  bootstrap: [
    FlightViewerComponent
  ]
})
export class AppModule {
}
