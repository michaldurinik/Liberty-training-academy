import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ElectoralResultsComponent} from './components/election-results/electoral-results.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {ServicesModule} from './services/services.module';
import {FullResultsModule} from './full-results/full-results.module';
import {PartyResultsModule} from './party-results/party-results.module';
import {ConstituencyResultsModule} from './constituency-results/constituency-results.module';
import {HomeComponent} from './components/home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    ConstituencyResultsModule,
    FullResultsModule,
    HttpClientModule,
    PartyResultsModule,
    RouterModule.forRoot(appRoutes),
    ServicesModule
  ],
  declarations: [
    ElectoralResultsComponent,
    HomeComponent
  ],
  bootstrap: [
    ElectoralResultsComponent
  ]
})
export class AppModule {
}

console.log('*** Loading AppModule');
