import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs/Observable"
import 'rxjs'

@Component({
  selector: 'app-custom-chips',
  templateUrl: './custom-chips.component.html',
  styleUrls: ['./custom-chips.component.css']
})
export class CustomChipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.$chips = Observable.of(this.textStub).delay(5000)
  }
  $chips: Observable<Array<string>>
  textStub: Array<string> = ['one', 'two', 'three', 'four']
}
