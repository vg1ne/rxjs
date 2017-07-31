import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user') user: gitHubUser
  constructor() { }

  ngOnInit() {
  }

}

export class gitHubUser{
  avatar_url: string
  login: string
  id: number
  url: string
  name: string
}
