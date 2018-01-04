import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserDomainService } from '../user-domain.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private userApi: UserDomainService, public snackBar: MatSnackBar) {
    this.user = { nadroSapId: null, name: "", lastname: "", id: null, password: "", username: "" };
  }

  ngOnInit() {
    this.route.params.subscribe(res => this.id = res.userId);
    if (this.id) {
      this.userApi.getUser(this.id).subscribe(
        data => {
          this.user = data;
        },
        err => console.error(err)
      );
    }
  }

  sendToUserList() {
    this.router.navigate(['user']);
  }

  updateUser(user: User) {
    this.userApi.updateUser(user).subscribe(data => {
      this.snackBar.open('Usuario actualizado con éxito', '', {
        duration: 1000,
      });
      this.router.navigate(['user']);
    }, error => { alert("Algo salio mal verifica los datos"); });
  }

}
