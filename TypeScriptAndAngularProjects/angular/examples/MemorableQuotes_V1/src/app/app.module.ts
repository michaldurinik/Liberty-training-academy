import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {QuotesEditorComponent} from './components/quotes-editor/quotes-editor.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {QuotesRowComponent} from './components/quotes-row/quotes-row.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    QuotesEditorComponent,
    QuotesRowComponent],
  bootstrap: [
    QuotesEditorComponent
  ]
})
export class AppModule {
}
