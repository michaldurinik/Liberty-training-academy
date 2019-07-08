import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ElectoralResultsComponent} from './components/election-results/electoral-results.component';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {ServicesModule} from './services/services.module';
import {HomeComponent} from './components/home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    // RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
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
