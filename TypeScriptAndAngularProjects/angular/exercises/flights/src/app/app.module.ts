import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import {FlightService} from './services/flight.service';
import {FlightServiceHttp} from './services/flight.service.http';
import {FlightViewerRowComponent} from './components/flight-viewer-row/flight-viewer-row.component';


@NgModule({
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent
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
