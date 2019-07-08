import {Routes} from '@angular/router';
import {FlightViewerComponent} from './flights-viewer/components/flight-viewer/flight-viewer.component';
import {WelcomeComponent} from './home/components/welcome/welcome.component';
import {FlightHomeComponent} from './flights-viewer/components/flight-home/flight-home.component';

export const routes: Routes = [
  {path: 'flights', component: FlightHomeComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: ''}
];
