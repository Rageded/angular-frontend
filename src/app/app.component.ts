import { Component } from '@angular/core';

import  { User } from './models/user';
import { UserService } from './services/user.service';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	template: `
	<app-top-nav></app-top-nav>
	<div class="container-fluid">
		<router-outlet></router-outlet>
	</div>


	`,
	providers: [UserService]
})

export class AppComponent {
	
	title = 'Users';


}
