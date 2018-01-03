import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = {id:null, sapId:null, name: "", lastname: "", email: "", username:"", password:""};
  }

  sendToUserList() {
    this.router.navigate(['user']);
  }

}
