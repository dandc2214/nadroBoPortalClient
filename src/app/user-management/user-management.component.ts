import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from './user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserDomainService } from './user-domain.service';

import { MatPaginatorIntl } from '@angular/material';
import { MatDialog } from '@angular/material';
import { YesNoDialogComponent } from '../yes-no-dialog/yes-no-dialog.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  displayedColumns = ['sapId', 'name', 'lastname', 'username', 'manageActions'];
  // USER_DATA: User[] = [];
  // dataSource = new MatTableDataSource<User>(this.USER_DATA);
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private router: Router, private userApiConsumer: UserDomainService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  editUser(user) {
    this.router.navigate([`user/edit/${user.id}`]);
  }

  deleteUser(user) {
    this.confirmDialog(user);
  }

  getUsers() {
    this.userApiConsumer.getUsers().subscribe(
      data => {
        // this.USER_DATA = data
        this.dataSource.data = data;
        // this.dataSource = new MatTableDataSource<User>(data);
        // console.log(this.USER_DATA);
        // console.log(`data ====================> ${JSON.stringify(data)}`);
      },
      err => console.error(err),
      // () => console.log('done loading users')
    );
  }

  confirmDialog(user): void {
    let confirmDelete;
    let dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      /* data: { name: this.name, animal: this.animal } */
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if(result){
        this.userApiConsumer.deleteUser(user.id).subscribe(data => { this.getUsers();}, error => { alert("Algo salio mal"); });;
      }      
    });
  }


}

// // TODO get data from server
// const USER_DATA: User[] = [
//   { id: '1', sapId: 1, name: "Dan", lastname: "Delgadillo", email: "email@mail.com", username: "admin", password: "1" },
//   { id: '2', sapId: 2, name: "Ber", lastname: "Delgadillo", email: "rmi@rmo.com", username: "user", password: "2" }
// ];


const spanishRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 de ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} de ${length}`;
}


export function getSpanishPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Artículos por página:';
  paginatorIntl.nextPageLabel = 'Siguiente página';
  paginatorIntl.previousPageLabel = 'Pagina anterior';
  paginatorIntl.getRangeLabel = spanishRangeLabel;

  return paginatorIntl;
}