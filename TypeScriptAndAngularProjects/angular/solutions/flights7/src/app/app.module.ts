import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {HttpClientModule} from '@angular/common/http';
import {FlightViewerRowComponent} from './components/flight-viewer-row/flight-viewer-row.component';
import {FlightsService} from './service/flights-service';
import {FlightsServiceHttp} from './service/flights-service-http';
import {FlightDetailsComponent} from './components/flight-details/flight-details.component';
import {FlightUpdateFormComponent} from './components/flight-update-form/flight-update-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlightsAppComponent} from './components/flights-app/flights-app.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';


@NgModule({
  declarations: [
    FlightViewerComponent,
    FlightViewerRowComponent,
    FlightDetailsComponent,
    FlightUpdateFormComponent,
    FlightsAppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: FlightsService, useClass: FlightsServiceHttp}
  ],
  bootstrap: [
    FlightsAppComponent
  ]
})
export class AppModule {
}
