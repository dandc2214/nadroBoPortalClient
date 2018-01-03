import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from './user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserDomainService } from './user-domain.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  displayedColumns = ['sapId', 'name', 'lastname', 'username', 'email', 'manageActions'];
  USER_DATA: User[] = [];
  dataSource = new MatTableDataSource<User>(this.USER_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private router: Router, private userApiConsumer: UserDomainService) { }

  ngOnInit() {
    this.getFoods();
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editUser(user) {
    this.router.navigate([`user/edit/${user.id}`]);
  }

  getFoods() {
    this.userApiConsumer.getUsers().subscribe(
      data => { 
        // this.USER_DATA = data
        console.log(`data ====================> ${data}`);
      },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

}

// // TODO get data from server
// const USER_DATA: User[] = [
//   { id: '1', sapId: 1, name: "Dan", lastname: "Delgadillo", email: "email@mail.com", username: "admin", password: "1" },
//   { id: '2', sapId: 2, name: "Ber", lastname: "Delgadillo", email: "rmi@rmo.com", username: "user", password: "2" }
// ];