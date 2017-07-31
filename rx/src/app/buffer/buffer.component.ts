import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable"
import 'rxjs'

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.intervalValue$ = Observable.interval(1000)
    const buffer$ = Observable.fromEvent(document.getElementById('buffer'), 'click')
    this.bufferValue$ = this.intervalValue$.buffer(buffer$)

    this.bufferValue$.subscribe(
      x => console.log(' '+x),
      e => console.log(e),
      () => console.log('completed'))

  }
  private intervalValue$ : Observable<number>
  private bufferValue$ : Observable<Array<number>>
}
