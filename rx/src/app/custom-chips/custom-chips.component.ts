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
  }
  $chips: Observable<Array<string>>
}
