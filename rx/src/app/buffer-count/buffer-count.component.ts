import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.css']
})
export class BufferCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const interval = Observable.interval(1000)
    this.bufferCount$ = interval.bufferCount(5)
    this.bufferCount2$ = interval.bufferCount(3,1)
  }
  private bufferCount$: Observable<Array<number>>
  private bufferCount2$: Observable<Array<number>>
}
