import {QuotesServiceHttp} from './quotes.service.http';
import {Observable, of} from 'rxjs';

const sampleQuotes = [
  {text: 'Fortune favors the prepared mind', source: 'Louis Pasteur'},
  {text: 'Tether even a cooked chicken', source: 'Hagakure'}
];

function asyncData<T>(data: T) {
  return of(data);
}

describe('QuotesServiceHttp without DI', () => {
  let target: QuotesServiceHttp;
  let http: { get: jasmine.Spy };

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get']);
    http.get.and.returnValue(asyncData(sampleQuotes));

    target = new QuotesServiceHttp(http as any);
  });

  it('Quotes can be fetched', () => {
    target.fetchQuotes()
      .subscribe(quotes => expect(quotes.length).toEqual(2));
  });

  it('Sources of quotes are correct', () => {
    target.fetchQuotes()
      .subscribe(quotes => {
        const q1 = quotes[0];
        const q2 = quotes[1];

        expect(q1.source).toEqual('Louis Pasteur');
        expect(q2.source).toEqual('Hagakure');
      });
  });

  it('Text in quotes is correct', () => {
    target.fetchQuotes()
      .subscribe(quotes => {
        const q1 = quotes[0];
        const q2 = quotes[1];

        expect(q1.text).toEqual('Fortune favors the prepared mind');
        expect(q2.text).toEqual('Tether even a cooked chicken');
      });
  });
});
