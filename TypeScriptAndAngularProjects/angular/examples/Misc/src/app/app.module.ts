import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {CustomPipesModule} from './custom-pipes/custom-pipes.module';
import {TabsModule} from 'ngx-bootstrap';
import {GuardsModule} from './guards/guards.module';
import {Route, RouterModule} from '@angular/router';
import {InterceptorModule} from './interceptor/interceptor.module';

const routes: Route[] = [];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomPipesModule,
    GuardsModule,
    InterceptorModule,
    RouterModule.forRoot(routes),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
