import {Routes} from '@angular/router';
import {FlightViewerComponent} from './components/flight-viewer/flight-viewer.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

export const routes: Routes = [
  {path: 'flights', component: FlightViewerComponent},
  {path: '**', component: WelcomeComponent}
];
