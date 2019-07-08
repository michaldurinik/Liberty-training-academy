import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ElectoralResultsComponent} from './components/election-results/electoral-results.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    ElectoralResultsComponent
  ],
  bootstrap: [
    ElectoralResultsComponent
  ]
})
export class AppModule {
}
