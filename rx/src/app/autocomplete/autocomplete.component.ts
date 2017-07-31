import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('inputElement') inputElement: ElementRef
  @ViewChild('inputForFiltering') inputFilterElement: ElementRef

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.input$ = this.initInputObservable()
    this.inputFiltering$ = this.initInputFilteringObservable()

    const user = this.input$.flatMap(
      value => this.http.get(this.url + '/' + value)
        .toPromise()
        .then((resp) => {
          return resp.json()
        })
        .catch((e) => console.log(e))
    )
    user.subscribe((x) => this.user = x)

    const user$ = this.inputFiltering$
      .mergeMap((term) => {
        return this.http.get(`${this.url}/${term}`)
      })
      .subscribe((val) => {
        this.user2=val.json()
      })

    const users = this.inputFiltering$
      .mergeMap((term) => {
        return this.http.get(this.url)
      })

    //   const usersFiltered = users.mapTo((val)=>val.json())
    // usersFiltered.subscribe((x) => {
    //   console.log(x)
    // })
    }


    // const usersFiltered = users.mergeMap()

  initInputObservable() {
    return Observable
      .fromEvent(this.inputElement.nativeElement, 'input')
      .map((event: any) => event.target.value)
      .distinctUntilChanged()
      .debounceTime(500)
  }

  initInputFilteringObservable() {
    return Observable
      .fromEvent(this.inputFilterElement.nativeElement, 'input')
      .map((event: any) => event.target.value)
      .distinctUntilChanged()
      .debounceTime(500)
  }

  private url: string = 'https://api.github.com/users'
  private input$: Observable<string>
  private inputFiltering$: Observable<string>
  private user: any
  private user2: any
  private users: any
}
