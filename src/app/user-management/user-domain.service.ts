import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user';

/**
 * Service used to conect with backend endPoint
 * Implements all methods related to user
 */

@Injectable()
export class UserDomainService {

  token: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = this.cookieService.get('access_token');
  }

  // Uses http.get() to load data from a single API endpoint
  getUsers() {
    return this.http
      .get<User[]>('http://localhost:8080/api/management/user', {
        // params: new HttpParams().set('id', '56784'),
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('X-Auth-Token', this.token)
      });
  }

  getUser(userId) {
    return this.http
      .get<User>('http://localhost:8080/api/management/user/' + userId, {
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('X-Auth-Token', this.token)
      });
  }

  updateUser(user) {
    return this.http
      .put('http://localhost:8080/api/management/user/' + user.id, user, {
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('X-Auth-Token', this.token)
      });
  }

  saveUser(user) {
    return this.http
      .post('http://localhost:8080/api/management/user', user, {
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('X-Auth-Token', this.token)
      });
  }

  deleteUser(userId) {
    return this.http
      .delete('http://localhost:8080/api/management/user/' + userId, {
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('X-Auth-Token', this.token)
      });
  }

  getBoUrl(username) {
    return this.http
      .get<any>('http://localhost:8080/api/bo', {
        params: new HttpParams().set('username', username),
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('X-Auth-Token', this.token)
      });;
  }

}
