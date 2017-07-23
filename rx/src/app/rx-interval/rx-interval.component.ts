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
    const obsTimer = Observable.interval(1000).take(20)
    obsTimer.subscribe((value)=>{
      this.numbers.push(this.numbers.length)
    })
  }
  numbers: Array<number> = []
}
