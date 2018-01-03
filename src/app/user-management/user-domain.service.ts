import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';

/**
 * Service used to conect with backend endPoint
 * Implements all methods related to user
 */

@Injectable()
export class UserDomainService {

  token: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = 'eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJINHNJQUFBQUFBQUFBSlZTUDBcL2JRQlJcL0RvbEFRbENvVkNRR3VoUzJ5cEhhTVZOQmdJU3NwR3FhQlNUUXhYNjRCK2M3OSs0TXlZSXl3Y0FBb2tXcTJxXC9BTjRHRkQxQ1ZnWldabFhlRzRNQ0Nlb3V0ZHpcL1wvXC9qMmYzVURGYVBnWWE4YUY4Vk9SeFZ6Nkp0VmN4Z2JEVEhQYjlUT0RPa0tiSTVaellJc21jSCs4RW5nQmxIaGs0WFd3eFhaWVZUQVpWeHZ0TFF4dHJhUGhnOUx4QStPbVpnbnVLcjN0UDNLSFN1TVRnWUxhKzEyQzRWV1laR0dvTW1uclNpNTJVcTR4V29XSlloYW9jTnVOM29SMGc5SnlKc3dnZEJnbGF3dU1BaGhsbWYybVNKV2pzZkRxM214bXVhZzIwZFlDR0VtWk1lVHVXWkttZGRiZHZiTXBLY0YzMklOeUpcL1hvVUhkekR1bzdIbjlCQ1VHcHVaSm10aVVURmZGTjdzU0p2emR6Y25uMHA5Y3FBVkFuNzFcLytwcGhQejBQdmZQMzJiVjYwRjFxWUdyQmV3R3FkbE54TUZzeGZOVHJsdjc4K1wvemk5T1ZnYkltV0hXUHJcL2ZjeCtlbWl1dTZDU2xHbG0xY0NPaUhhMzdONkpmUDVsOHY0V3VuNlRKNmxBK3FPa3hlaFJvaUNtdUdXdFJMOXZDMk5mR3NIaVJyMng0WjVOTjZtd0tPR1NoTWZ6M0c1aGZxQm9YWWZYeHhkSDdcLzRSeVFwVWRwaklrR3FmS0VEMUxHbWozajg3blJuOWVYV1loK2pcLzBIZG0rVnVGRkFNQUFBPT0iLCJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIlJPTEVfTk9fUk9MRVMiXSwiZXhwIjoxNTE0NzA5NDU4LCJpYXQiOjE1MTQ3MDU4NTh9.xPTX-kFGqvjwUAMT_G_TXjlQlc_ocar4fIEKLXdJ8aw';
  }

  // Uses http.get() to load data from a single API endpoint
  getUsers() {
    return this.http
      .get('http://localhost:8080/api/management/user', {
        // params: new HttpParams().set('id', '56784'),
        headers: new HttpHeaders().set('Content-Type', 'application/json').set('X-Auth-Token', this.token)
      })
  }

}
