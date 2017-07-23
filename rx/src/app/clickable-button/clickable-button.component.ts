import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-clickable-button',
  templateUrl: './clickable-button.component.html',
  styleUrls: ['./clickable-button.component.css']
})
export class ClickableButtonComponent implements OnInit {
  @ViewChild('btn') btn:ElementRef;
  constructor(private rd: Renderer2) { }

  ngOnInit() {
    const clickStream = Observable.fromEvent(this.btn.nativeElement, 'click')

    const doubleClickStream = clickStream
      .bufferWhen(() => clickStream.debounceTime(250))
      .map(arr => arr.length)
      .filter(len => len===2)

    doubleClickStream.subscribe(c => {
      this.timeString = new Date().toTimeString()
    })
  }
  timeString: string
}
