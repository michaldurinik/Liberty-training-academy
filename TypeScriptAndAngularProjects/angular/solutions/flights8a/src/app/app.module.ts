import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {FlightsAppComponent} from './flights-app/flights-app.component';
import {FlightsViewerModule} from './flights-viewer/flights-viewer.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    FlightsAppComponent
  ],
  imports: [
    BrowserModule,
    FlightsViewerModule,
    HomeModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [
    FlightsAppComponent
  ]
})
export class AppModule {
}
