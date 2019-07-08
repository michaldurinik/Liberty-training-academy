import {Route} from '@angular/router';
import {CreatingComponent} from './creating/creating.component';
import {ObservingComponent} from './observing/observing.component';
import {FilteringComponent} from './filtering/filtering.component';
import {TransformingComponent} from './transforming/transforming.component';
import {MouseEventsComponent} from './mouse-events/mouse-events.component';

export const routes: Route[] = [
  {path: 'creating', component: CreatingComponent},
  {path: 'observing', component: ObservingComponent},
  {path: 'filtering', component: FilteringComponent},
  {path: 'transforming', component: TransformingComponent},
  {path: 'mouse-events', component: MouseEventsComponent},
];
