import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultsService} from './results.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    ResultsService
  ]
})
export class ServicesModule { }

console.log('*** Loading ServicesModule');
