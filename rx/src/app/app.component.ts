import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable"
import 'rxjs'
import {OnInit} from "@angular/core"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  ngOnInit(){
    this.$number = Observable
      .from(this.numbers)
      .take(this.numbers.length)
      .map((x)=>x)
      .filter((x, i)=>x%2>0);

    const sub = this.$number
      .delay(1000)
      // .subscribe(x=> console.log(x))

    const $more = Observable.of(1,2,3,4)

    const foo = Observable.interval(1000).take(5)
    const foo2 = Observable.of(10,11,12)
    // const fooSub = $more
    //   .startWith(1000000000000)
    //   .concat(foo)
    //   .take(5)
    //   .subscribe(
    //     x => console.log(x)
    //   )
    // const merged = foo.merge(foo2)
    //   .subscribe(x=> console.log(x))
    const interval = Observable.interval(500)
    const foo3 = Observable.of(1,2,3,4,5)
    this.$combined = Observable.zip(interval, foo3, (x,y)=> y)
    this.$combined.subscribe()
    const $del = interval.delayWhen(x => Observable.interval(x*x * 100).take(1))
    $del.subscribe(x=>console.log(x))
  }

  private $combined: Observable<number>
  private $number: Observable<number>
  private numbers : Array<number> = [1,2,3,4,5,6,7]
}
