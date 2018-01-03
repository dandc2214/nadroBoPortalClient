import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CreateUserComponent } from './user-management/create-user/create-user.component';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        component: UserManagementComponent,
      },
      {
        path: 'user/create',
        component: CreateUserComponent
      },
      {
        path: 'user/edit/:userId',
        component: EditUserComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
