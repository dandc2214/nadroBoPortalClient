import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { UserManagementModule } from './user-management/user-management.module';
import { LayoutModule } from './layout/layout.module'

import { UserDomainService } from './user-management/user-domain.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MatPaginatorIntl } from '@angular/material';
import { getSpanishPaginatorIntl } from './user-management/user-management.component';

import { CookieService } from 'ngx-cookie-service';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    YesNoDialogComponent,
    UserManagementComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    UserManagementModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService, UserDomainService, { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }],
  bootstrap: [AppComponent],
  entryComponents: [YesNoDialogComponent]
})
export class AppModule { }
