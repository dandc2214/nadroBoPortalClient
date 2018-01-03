import { Component } from '@angular/core';
import 'rxjs/add/operator/pairwise';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Nadro';

	constructor(private router: Router) {
		this.router.events.pairwise().subscribe((event) => {
			// console.log(event);
			// TODO check if authToken
		});

	}
}
