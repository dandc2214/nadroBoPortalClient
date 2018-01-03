import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { MaterialModule } from '../material.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    UserFormComponent,
    CreateUserComponent
  ],
  declarations: [UserFormComponent, CreateUserComponent, EditUserComponent]
})
export class UserManagementModule { }
