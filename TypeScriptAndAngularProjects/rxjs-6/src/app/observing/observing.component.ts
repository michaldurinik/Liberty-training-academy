import {Component, OnInit} from '@angular/core';
import {from, interval, Observable} from 'rxjs';
import {Observer} from 'rxjs';

const data = ['abc', 123, 'def', 456];

// NOTE - Be careful if storing any state in the Observer
class MyObserver implements Observer<string> {
  output = '';

  next = (value) => this.output += `\n${value}`;

  error = (error) => this.output += `\nError: ${error}`;

  complete = () => this.output += 'Completed stream';
}

@Component({
  selector: 'app-observing',
  templateUrl: './observing.component.html',
})
export class ObservingComponent implements OnInit {
  arrowOutput = '';

  functionOutput = '';
  classObserver = new MyObserver();
  errorObserver = new MyObserver();

  get co() {
    console.log('Accessor');
    return this.classObserver.output;
  }


  constructor() {
  }

  ngOnInit(): void {
    this.runDemo();
  }

  private runDemo() {
    from(data)
      .subscribe(
        value => this.arrowOutput += `\n${value}`,
        error => this.arrowOutput += `\nError: ${error}`,
        () => this.arrowOutput += '\nCompleted stream');

    from(data)
      .subscribe(this.next, this.error, this.complete);

    from(data)
      .subscribe(this.classObserver);

    new Observable(observer => {
      observer.next(123);
      observer.next(456);
      observer.next(789);
      observer.error('Stream error event');
      // Due to the error the next and complete doing
      //  get emitted
      observer.next(999);
      observer.complete();
    })
      .subscribe(this.errorObserver);

    setTimeout(() => {
    }, 2000);
  }

  private next = value => {
    this.functionOutput += `\n${value}`;
  }

  private error = error => {
    this.functionOutput += `\nError: ${error}`;
  }

  private complete = () => {
    this.functionOutput += `\nCompleted stream`;
  }
}
