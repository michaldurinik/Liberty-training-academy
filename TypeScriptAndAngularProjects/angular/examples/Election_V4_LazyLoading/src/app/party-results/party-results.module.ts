import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PartyResultsComponent} from './party.results.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: ':name', component: PartyResultsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PartyResultsComponent
  ]
})
export class PartyResultsModule { }

console.log('*** Loading PartyResultsModule');
