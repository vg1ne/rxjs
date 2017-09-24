import { Component, OnInit } from '@angular/core';
import 'rxjs';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-rx-interval',
  templateUrl: './rx-interval.component.html',
  styleUrls: ['./rx-interval.component.css']
})
export class RxIntervalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear()
    const startButton = document.querySelector('#start')
    const stopButton = document.querySelector('#stop')
    const resetButton = document.querySelector('#reset')

    const stopButtonClick$ = Observable
      .fromEvent(stopButton, 'click')
    const startButtonClick$ = Observable
      .fromEvent(startButton, 'click')
    const resetButtonClick$ = Observable
      .fromEvent(resetButton, 'click')

    const interval$ = Observable
      .interval(1000)
    const intervalThatStops$ = interval$
      .takeUntil(stopButtonClick$)

    const data = {count:0};
    const inc = (acc)=> ({count: acc.count + 1});
    const reset = (acc)=> data;

    const incOrReset$ = Observable.merge(
      intervalThatStops$.mapTo(inc),
      resetButtonClick$.mapTo(reset)
    );

    startButtonClick$
      .switchMapTo(incOrReset$)
      .startWith(data)
      .scan((acc, curr) => curr(acc))
      .subscribe((x)=> console.log(x));

// document.body.insertAdjacentHTML('beforeend', `<div>${x}</div>`)
  }
}
