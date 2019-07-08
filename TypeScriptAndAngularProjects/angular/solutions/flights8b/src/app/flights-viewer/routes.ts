import {Routes} from '@angular/router';
import {FlightHomeComponent} from './components/flight-home/flight-home.component';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {FlightDetailsComponent} from './components/flight-details/flight-details.component';

export const routes: Routes = [
  {
    path: 'flights',
    component: FlightHomeComponent,
    children: [
      {path: ':number', component: FlightDetailsComponent},
      {path: '', component: FlightViewerComponent}
    ]
  }
];
