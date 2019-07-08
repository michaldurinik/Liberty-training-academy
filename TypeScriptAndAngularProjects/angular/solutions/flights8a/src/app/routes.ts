import {Routes} from '@angular/router';
import {FlightViewerComponent} from './flights-viewer/components/flight-viewer/flight-viewer.component';
import {WelcomeComponent} from './home/components/welcome/welcome.component';

export const routes: Routes = [
  {path: 'flights', component: FlightViewerComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: ''}
];
