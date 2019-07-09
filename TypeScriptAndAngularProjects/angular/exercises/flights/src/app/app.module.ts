import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import {FlightService} from './services/flight.service';
import {FlightServiceHttp} from './services/flight.service.http';


@NgModule({
  declarations: [
    FlightViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: FlightService, useClass: FlightServiceHttp}
  ],
  bootstrap: [
    FlightViewerComponent
  ]
})
export class AppModule {
}
