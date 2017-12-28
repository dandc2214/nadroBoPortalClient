import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
    // this.user = {sapId:"", name: "ggg", lastname: "", email: ""};
  }

}
