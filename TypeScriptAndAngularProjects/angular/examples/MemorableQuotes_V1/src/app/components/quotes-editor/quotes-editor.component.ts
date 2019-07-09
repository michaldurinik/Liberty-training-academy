import {Component, OnInit} from '@angular/core';
import {Quote} from '../../model/quote';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

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
    this.newText = 'Get to the choppa!';
    this.newSource = 'Colonel Matrix';

    this.http.get<Quote[]>('assets/data/quotes.json')
      .subscribe(quotes => this.quotations = quotes);
  }

  addQuotation() {
    this.quotations.push({ text: this.newText, source: this.newSource });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  insertQuote(data) {
    this.quotations.splice(this.getRandomInt(this.quotations.length), 0,
      data);
  }

  surprise() {
    const randomInt = this.getRandomInt(5);
    switch (randomInt) {
      case 0: {
        this.quotations.reverse();
        break;
      }

      case 1: {
        this.quotations.pop();
        this.quotations.splice(0, this.getRandomInt(this.quotations.length));
        break;
      }

      case 2: {
        this.addQuotation();
        break;
      }

      case 3: {
        this.insertQuote({source: 'Yo Mama', text: 'so Fat!'});
        break;
      }

      case 4: {
        for (const quoteData of this.quotations) {
          quoteData.source = 'Sheldon Cooper';
          quoteData.text = '"Bazinga" you Punk!!!!!';
        }
        break;
      }

      default: {
        console.log('Invalid choice');
        break;
      }
    }
  }
}
