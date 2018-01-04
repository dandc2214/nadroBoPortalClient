import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginInterface } from './login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: Boolean;

  // MAybe move login request to service
  constructor(private cookieService: CookieService, private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.http.post<LoginInterface>('http://localhost:8080/api/login', {
      "username": username,
      "password": password
    },{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(
      data => {
        this.cookieService.set( 'access_token', data.access_token );
        this.cookieService.set( 'user_roles', JSON.stringify(data.roles) );
        this.cookieService.set( 'username', data.username );
        this.router.navigate(['user']);
      },
      err => {console.error("error" + err); this.loginError= true;},
      () => console.log('Login request done')
    );

  }
}