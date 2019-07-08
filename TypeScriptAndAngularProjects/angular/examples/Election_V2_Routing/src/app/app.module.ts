import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ElectoralResultsComponent} from './components/election-results/electoral-results.component';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {appRoutes} from './routes';
import {FullResultsComponent} from './components/full-results/full.results.component';
import {HomeComponent} from './components/home/home.component';
import {ConstituencyResultsComponent} from './components/constituency-results/constituency-results.component';
import {PartyResultsComponent} from './components/party-results/party.results.component';
import {ResultsService} from './services/results.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ElectoralResultsComponent,
    FullResultsComponent,
    HomeComponent,
    ConstituencyResultsComponent,
    PartyResultsComponent
  ],
  bootstrap: [
    ElectoralResultsComponent
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    ResultsService
  ]
})
export class AppModule {
}
