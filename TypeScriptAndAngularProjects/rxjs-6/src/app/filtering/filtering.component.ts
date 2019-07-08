import {Component, OnInit} from '@angular/core';
import {SOURCE} from '@angular/compiler-cli';
import {Observable} from 'rxjs';
import {auditTime, debounceTime, filter, skip, throttleTime} from 'rxjs/operators';

function asyncSequence(observer) {
  let counter = 1;
  generateNextValue();

  function generateNextValue() {
    if (counter > 30) {
      observer.complete();
      return;

    }
    observer.next(counter++);
    setTimeout(generateNextValue, 500 + (500 * (counter % 5)));
  }
}

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
})
export class FilteringComponent implements OnInit {
  source: number[] = [];
  even: number[] = [];
  skip: number[] = [];
  throttle: number[] = [];
  audit: number[] = [];
  debounce: number[] = [];

  ngOnInit() {
    this.runDemo();
  }

  private runDemo() {
    const sourceObservable = new Observable<number>(asyncSequence);
    sourceObservable.subscribe(x => this.source.push(x));

    const evenObservable = sourceObservable.pipe(filter(x => x % 2 === 0));
    evenObservable.subscribe(x => this.even.push(x));

    evenObservable.pipe(skip(4)).subscribe(x => this.skip.push(x));

    sourceObservable.pipe(throttleTime(2000)).subscribe(x => this.throttle.push(x));

    sourceObservable.pipe(auditTime(2000)).subscribe(x => this.audit.push(x));

    sourceObservable.pipe(debounceTime(2000)).subscribe(x => this.debounce.push(x));
  }
}
