import {TestBed, inject} from '@angular/core/testing';
import {QuotesServiceHttp} from './quotes.service.http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {afterEach} from 'selenium-webdriver/testing';

const sampleQuotes = [
  {text: 'AAA', source: '111'},
  {text: 'BBB', source: '222'},
  {text: 'CCC', source: '333'}
];

describe('QuotesServiceHttp', () => {
  let httpMock: HttpTestingController;
  let target: QuotesServiceHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        QuotesServiceHttp
      ]
    });
  });

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
    target = TestBed.get(QuotesServiceHttp);
  });

  function setupMockQuotesAndVerify() {
    httpMock.expectOne('assets/data/quotes.json')
      .flush(sampleQuotes);

    httpMock.verify();
  }

  it('Quotes can be fetched', () => {
    target.fetchQuotes()
      .subscribe(quotes => expect(quotes.length).toEqual(3));

    setupMockQuotesAndVerify();
  });

  it('Sources of quotes are correct', () => {
    target.fetchQuotes()
      .subscribe(quotes => {
        expect(quotes[0].source).toEqual('111');
        expect(quotes[1].source).toEqual('222');
        expect(quotes[2].source).toEqual('333');
      });

    setupMockQuotesAndVerify();
  });

  it('Text in quotes is correct', () => {
    target.fetchQuotes()
      .subscribe(quotes => {
        expect(quotes[0].text).toEqual('AAA');
        expect(quotes[1].text).toEqual('BBB');
        expect(quotes[2].text).toEqual('CCC');
      });

    setupMockQuotesAndVerify();
  });
});
