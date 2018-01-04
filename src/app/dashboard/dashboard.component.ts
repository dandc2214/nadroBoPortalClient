import { Component, OnInit } from '@angular/core';
import { UserDomainService } from '../user-management/user-domain.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    isAdmin: Boolean;
    uri: any;

    constructor(private cookieService: CookieService, private router: Router, private userApi: UserDomainService, public sanitizer: DomSanitizer) { }

    ngOnInit() {
        const tokenExists: boolean = this.cookieService.check('access_token');
        if (tokenExists) {
            // Cookie is a string so we must format to array of roles
            let roles = JSON.parse(this.cookieService.get('user_roles'));
            this.isAdmin = roles.indexOf('ROLE_ADMIN') != -1;
            if (!this.isAdmin) {
                this.userApi.getBoUrl(this.cookieService.get('username')).subscribe(data=>{console.log(data); this.uri = data.uri})
                // this.uri = "http://www.su.co/";
            }
        } else {
            this.router.navigate(['login']);
        }
    }

    logout() {
        this.cookieService.delete('access_token');
        this.cookieService.delete('user_roles');
        this.cookieService.delete('username');
        this.router.navigate(['login']);
    }

}
