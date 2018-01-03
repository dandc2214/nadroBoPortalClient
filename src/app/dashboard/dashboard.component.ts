import { Component, OnInit } from '@angular/core';
import { UserDomainService } from '../user-management/user-domain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isAdmin: Boolean = true;

  constructor(private userApiConsumer: UserDomainService) { }

  ngOnInit() {
  }

}
