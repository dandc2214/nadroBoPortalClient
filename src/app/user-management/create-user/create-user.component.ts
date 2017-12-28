import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = {sapId:"", name: "ggg", lastname: "", email: ""};
  }

}
