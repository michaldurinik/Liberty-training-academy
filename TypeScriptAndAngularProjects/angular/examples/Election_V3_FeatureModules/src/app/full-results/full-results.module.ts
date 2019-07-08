import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FullResultsComponent} from './full.results.component';

const routes = [
  {path: 'full-results', component: FullResultsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FullResultsComponent
  ]
})
export class FullResultsModule {
}

console.log('*** Loading FullResultsModule');
