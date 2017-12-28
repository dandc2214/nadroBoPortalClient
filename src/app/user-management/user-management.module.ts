import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { MaterialModule } from '../material.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    UserFormComponent,
    CreateUserComponent
  ],
  declarations: [UserFormComponent, CreateUserComponent]
})
export class UserManagementModule { }
