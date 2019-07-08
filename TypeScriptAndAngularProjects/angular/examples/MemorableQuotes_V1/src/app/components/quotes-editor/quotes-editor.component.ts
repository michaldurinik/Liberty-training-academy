import {Component, OnInit} from '@angular/core';
import {Quote} from '../../model/quote';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-quotes-editor',
  templateUrl: './quotes-editor.component.html',
  styleUrls: ['./quotes-editor.component.css']
})
export class QuotesEditorComponent {
  quotations: Quote[];
  newText: string;
  newSource: string;

  constructor(private http: HttpClient) {
    this.newText = 'Get to the chappa!';
    this.newSource = 'Colonel Matrix';

    this.http.get<Quote[]>('assets/data/quotes.json')
      .subscribe(quotes => this.quotations = quotes);
  }

  addQuotation() {
    this.quotations.push({
      text: this.newText,
      source: this.newSource
    });
  }
}
