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

    // const user$ = this.inputFiltering$
    //   .mergeMap((term) => {
    //     return this.http.get(`${this.url}/${term}`)
    //   })
    //   .subscribe((val) => {
    //     this.user2=val.json()
    //   })
    const user$ = this.inputFiltering$
      .mergeMap((term)=>{
        return this.getUsersFiltered(term)
      })
    user$.subscribe((data)=>{
      console.log(data)
    })
    }
  getUsers(){
    return this.http.get(this.url)
      .map(res=>res.json())
      .concatMap(res=>res)
      .filter((x:any)=>x.id>30)
  }
  getUsersFiltered(term:string){
    return this.getUsers()
      .map(users=>users
        .filter(user=>
          user.login.indexOf(term)>=0))
  }
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
