import { Component, OnInit } from '@angular/core';
import  { User, types } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) {}

	users: User[] = [];

	selectedUser: User;

	types: any[] = types;

 	ngOnInit(): void {
  		this.userService.getUsers().then(users => this.users = users);
  		console.log(this.users);
  		
	}

	add(user: User): void {

		//name = name.trim();

		if (!user) { return; }
		console.log(user);
		this.userService.create(user)
		    .then(user => {

		    	if ( this.users == undefined) {
		    		this.users = [];
		    	}
		    	console.log('user response');
		    	console.log(user);
		    	this.users.push(user);
		    	console.log('users array');
		    	console.log(this.users);
		        this.selectedUser = null;
		    });
	}

	delete(user: User): void {
  	this.userService
      .delete(user.id)
      .then(() => {
        this.users = this.users.filter(h => h !== user);
        if (this.selectedUser === user) { this.selectedUser = null; }
      });
}

}
