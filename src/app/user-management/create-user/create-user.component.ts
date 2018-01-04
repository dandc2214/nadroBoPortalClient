import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserDomainService } from '../user-domain.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userApi: UserDomainService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = { nadroSapId: null, name: "", lastname: "", id: null, password: "", username: "" };
  }

  sendToUserList() {
    this.router.navigate(['user']);
  }

  saveUser(user: User) {
    this.userApi.saveUser(user).subscribe(data => {
      this.snackBar.open('Usuario creado con éxito', '', {
        duration: 1000,
      });
      this.router.navigate(['user']);
    }, error => { alert("Verifica los datos"); });
  }

}
