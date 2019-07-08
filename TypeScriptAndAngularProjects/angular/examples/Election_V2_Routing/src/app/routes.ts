import {Routes} from '@angular/router';
import {FullResultsComponent} from './components/full-results/full.results.component';
import {ConstituencyResultsComponent} from './components/constituency-results/constituency-results.component';
import {PartyResultsComponent} from './components/party-results/party.results.component';
import {HomeComponent} from './components/home/home.component';

export const appRoutes: Routes = [
  { path: 'full-results', component: FullResultsComponent },
  { path: 'by-constituency/:name', component: ConstituencyResultsComponent },
  { path: 'by-party/:name', component: PartyResultsComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: ''},
];
