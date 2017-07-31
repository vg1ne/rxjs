import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.css']
})
export class BufferTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const interval$ = Observable.interval(500)
    this.bufTime$ = interval$.bufferTime(2000)
  }
  private bufTime$: Observable<Array<number>>
}
