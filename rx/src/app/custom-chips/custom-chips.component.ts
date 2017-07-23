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
    //this.$chips = Observable.of(this.textStub).delay(3000)
    this.$chips2 = Observable.interval(1500)
      .take(this.textStub.length)
      .map(i=>this.textStub[i])
    this.$chips2.subscribe(x => this.chips.push(x))
  }

  $chips: Observable<Array<string>>
  $chips2: Observable<string>
  textStub: Array<string> = ['one', 'two', 'three', 'four']
  chips: Array<string> = []
}
