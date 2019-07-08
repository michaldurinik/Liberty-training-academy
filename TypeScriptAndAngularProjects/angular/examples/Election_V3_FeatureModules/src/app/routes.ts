import {Routes} from '@angular/router';
import {FullResultsComponent} from './full-results/full.results.component';
import {ConstituencyResultsComponent} from './constituency-results/constituency-results.component';
import {PartyResultsComponent} from './party-results/party.results.component';
import {HomeComponent} from './components/home/home.component';

export const appRoutes: Routes = [
  {path: '**', component: HomeComponent},
];
