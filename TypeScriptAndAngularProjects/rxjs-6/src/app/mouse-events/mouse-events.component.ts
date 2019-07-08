import {Component, OnInit} from '@angular/core';
import {fromEvent, timer} from 'rxjs';
import {filter, map, throttle} from 'rxjs/operators';

@Component({
  selector: 'app-mouse-events',
  templateUrl: './mouse-events.component.html',
  styleUrls: ['./mouse-events.component.css']
})
export class MouseEventsComponent implements OnInit {
  output = 'Output appears here...';
  isEnabled = true;
  mode = 'odd';
  delay = 200;

  ngOnInit() {
    this.runDemo();
  }

  private runDemo() {
    const isApplicable = (event) => event.target.getAttribute('class') === this.mode;

    const describe = event => `Mouse moved to ${event.clientX}, ${event.clientY}`;

    const nodes = document.querySelectorAll('#input p');

    // Now the throttle uses an Observable to control the time
    // When the passed Observable completes or emits values
    // That will release an item on the original Observable
    const subscription = fromEvent(nodes, 'mousemove')
      .pipe(
        filter(x => this.isEnabled),
        throttle(x => timer(this.delay)),
        filter(isApplicable),
        map(describe)
      )
      .subscribe(x => this.output = x);
  }

  setDelay(event: Event) {
    this.delay = (event.target as any).value;
  }
}
