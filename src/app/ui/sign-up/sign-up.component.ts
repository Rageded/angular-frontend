import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { User, types } from '../../models/user';

import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  	constructor( private loginService: LoginService, private router: Router) { }

  	users: User[] = [];

	types: any[] = types;

	error: Boolean = false;

	errorDescription: String = '';

 	ngOnInit(): void {
 	
	}

	/**
	 * call to sing up user
	 * @param {User} user [description]
	 */
	signUp(user: User): void {

		user.type = 'admin'; //add it manually

		let inputFailed = this.checkInputs(user);

        if (inputFailed && inputFailed != 'false') {
        	this.error = true;
           this.errorDescription = inputFailed;
           return;
        } else {
        	this.error = false;
        	this.errorDescription = '';
        }

		if (!user) { return; }

		this.loginService.signUp(user)
	    .then(response => {

	    	if (response.hasOwnProperty('error')) {

	    		for (let key in response['invalidAttributes']) {
	    			this.errorDescription = response['invalidAttributes'][key][0]['message'];
	    			break; //first error
	    		}

	    		this.error = true;

	    	} else { //success

	    		localStorage.setItem('user', JSON.stringify(response['auth']));

	    		delete response['auth'];

		    	this.users.push(response);

		    	this.router.navigate(['/users']);
		    	
	    	}	    	
	    	
	    });
	}

	/**
    * This will check if all inputs have been filled
    * @param {User} user 
    */
    checkInputs(user: User) {
        if (user.email == '' ) {
           return 'Email is missing';
        } else if (user.password == '') {
           return 'Password is missing';
        } else if (user.name == '') {
           return 'Name is missing';
        } else if (user.title == '') {
           return 'Title is missing';
        }else {
           return 'false';
        }
    }
}
