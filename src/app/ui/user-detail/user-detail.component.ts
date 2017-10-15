import { Component, Input, OnInit } from '@angular/core';
import { User, types } from '../../models/user';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { FormGroup, FormControl, FormArray, NgForm, FormBuilder} from '@angular/forms';

import { UserService } from '../../services/user.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],

})



export class UserDetailComponent implements OnInit {

	@Input() user: User;

	types = types;
	private userForm: FormGroup;
	

	constructor(
	  	private userService: UserService,
	  	private route: ActivatedRoute,
	  	private location: Location
	) {}


	ngOnInit(): void {
	  	this.route.paramMap
	    	.switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
	    	.subscribe(user => 
	    		this.user = user
	    	);
	}

	goBack(): void {
  		this.location.back();
	}

	save(): void {
		this.userService.update(this.user)
			.then(() => 
				this.goBack()
			);
	}
}
