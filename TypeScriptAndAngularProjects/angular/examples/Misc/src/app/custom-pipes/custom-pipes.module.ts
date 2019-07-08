import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomPipesComponent} from './custom-pipes.component';
import {SumPipe} from './sum.pipe';
import {ProductPipe} from './product.pipe';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {path: 'custom-pipes', component: CustomPipesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomPipesComponent,
    ProductPipe,
    SumPipe
  ],
  exports: [
    CustomPipesComponent
  ]
})
export class CustomPipesModule {
}
