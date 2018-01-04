import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;

  // we dont show password cause is encrypted
  newPassword: String;

  constructor() { }

  ngOnInit() {    
  }  

}
