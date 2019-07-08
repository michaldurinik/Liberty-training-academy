import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {bufferCount, map, mapTo, pairwise, scan} from 'rxjs/operators';

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
  selector: 'app-transforming',
  templateUrl: './transforming.component.html',
})
export class TransformingComponent implements OnInit {
  source: number[] = [];
  map: number[] = [];
  pairs: [number, number][] = [];
  buffer: number[][] = [];
  scan: number[] = [];
  boing: string[] = [];

  ngOnInit() {
    this.runDemo();
  }

  private runDemo() {
    // Using Subjects means all subscriptions
    //   are from a single source
    const subject = new Subject<number>();

    new Observable<number>(asyncSequence)
      .subscribe(subject);

    subject.subscribe(x => this.source.push(x));

    subject.pipe(map(x => x * x)).subscribe(x => this.map.push(x));

    subject.pipe(pairwise()).subscribe(x => this.pairs.push(x));

    subject.pipe(bufferCount(2, 3)).subscribe(x => this.buffer.push(x));

    subject.pipe(scan((total, value) => total + value)).subscribe(x => this.scan.push(x));

    subject.pipe(mapTo('Boing!!!')).subscribe(x => this.boing.push(x));
  }
}
