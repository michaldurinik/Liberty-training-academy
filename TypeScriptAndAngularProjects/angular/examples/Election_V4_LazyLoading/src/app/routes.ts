import {Routes} from '@angular/router';
import {FullResultsComponent} from './full-results/full.results.component';
import {ConstituencyResultsComponent} from './constituency-results/constituency-results.component';
import {PartyResultsComponent} from './party-results/party.results.component';
import {HomeComponent} from './components/home/home.component';

export const appRoutes: Routes = [
  {
    path: 'full-results',
    loadChildren: './full-results/full-results.module#FullResultsModule'
  },
  {
    path: 'by-party',
    loadChildren: './party-results/party-results.module#PartyResultsModule'
  },
  {
    path: 'by-constituency',
    loadChildren: './constituency-results/constituency-results.module#ConstituencyResultsModule'
  },
  {path: '**', component: HomeComponent},
];
