import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs/Observable"
import 'rxjs'

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  constructor() {
    this.buttonsText = ['text1', 'text2', 'text_last']
  }

  ngOnInit() {
    const ctrl = this
    ctrl.$anotherText = Observable.interval(2000).take(ctrl.arrayStub.length).map(i=> ctrl.arrayStub[i])
  }

  clicked(){
    console.log('clicked')
  }

  arrayStub: Array<string> = ['text 1', 'text 2', 'the last text']
  buttonsText: Array<string>
  $anotherText: Observable<string>
}
