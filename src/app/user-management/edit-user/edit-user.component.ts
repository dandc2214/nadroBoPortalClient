import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = { id: null, sapId: null, name: "", lastname: "", email: "", username: "", password: "" };
    this.route.params.subscribe(res => console.log(`=============> ${JSON.stringify(res)}`));
  }

  sendToUserList() {
    this.router.navigate(['user']);
  }

}
