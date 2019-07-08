import {Component, OnInit} from '@angular/core';
import {from, interval, Observable, range} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html'
})
export class CreatingComponent {
  fromArrayOutput = '';
  fromRangesOutput = '';
  newObservableOutput = '';
  fromPromisesOutput = '';
  intervalOutput = '';

  constructor() {
    this.runDemo();
  }

  private runDemo() {
    from(['abc', 123, 'def', 456])
      .subscribe(x => this.fromArrayOutput += '\n' + x);

    range(101, 5)
      .subscribe(x => this.fromRangesOutput += '\n' + x);

    new Observable(observer => {
      // This is all synchronous
      observer.next('first value');
      observer.next('second value');
      for (let ii = 0; ii < 3; ii++) {
        observer.next(ii);
      }
    })
      .subscribe(x => this.newObservableOutput += '\n' + x);

    const promise = new Promise(resolve =>
      setTimeout(() => {
        resolve('I\'ll get back to you');
      }, 3000));
    from(promise)
      .subscribe(x => this.fromPromisesOutput += '\n' + x);

    promise.then(() => {
      interval(1000)
        .pipe(
          map(x => x + ' s'),
          take(10))
        .subscribe(x => this.intervalOutput += '\n' + x);
    });
  }
}
