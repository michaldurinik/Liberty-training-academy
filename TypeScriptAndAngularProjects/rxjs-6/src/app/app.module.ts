import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatingComponent } from './creating/creating.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { ObservingComponent } from './observing/observing.component';
import { FilteringComponent } from './filtering/filtering.component';
import { TransformingComponent } from './transforming/transforming.component';
import { MouseEventsComponent } from './mouse-events/mouse-events.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreatingComponent,
    ObservingComponent,
    FilteringComponent,
    TransformingComponent,
    MouseEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
