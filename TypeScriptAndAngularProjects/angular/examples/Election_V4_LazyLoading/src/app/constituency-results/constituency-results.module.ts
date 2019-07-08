import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConstituencyResultsComponent} from './constituency-results.component';
import {ServicesModule} from '../services/services.module';
import {Router, RouterModule} from '@angular/router';


const routes = [
  {path: ':name', component: ConstituencyResultsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ConstituencyResultsComponent
  ]
})
export class ConstituencyResultsModule {
}

console.log('*** Loading ConstituencyResultsModule');
