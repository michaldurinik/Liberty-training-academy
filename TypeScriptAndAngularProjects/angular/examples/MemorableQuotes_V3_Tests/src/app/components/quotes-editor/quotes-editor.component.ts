import {Component, OnInit} from '@angular/core';
import {Quote} from '../../model/quote';
import {PropertiesService} from '../../services/properties.service';
import {QuotesService} from '../../services/quotes.service';

@Component({
  selector: 'app-quotes-editor',
  templateUrl: './quotes-editor.component.html',
  styleUrls: ['./quotes-editor.component.css'],
  providers: [PropertiesService]
})
export class QuotesEditorComponent {
  quotations: Quote[];
  newText: string;
  newSource: string;

  constructor(private quotesService: QuotesService, private propsService: PropertiesService) {
    // Use the component injected service to fetch defaults
    this.newText = propsService.getNewQuoteText();
    this.newSource = propsService.getNewQuoteSource();

    // Use the module injected service to fetch the quotations
    quotesService.fetchQuotes()
      .subscribe(quotes => this.quotations = quotes);
  }

  addQuotation() {
    this.quotations.push({
      text: this.newText,
      source: this.newSource
    });
  }
}
