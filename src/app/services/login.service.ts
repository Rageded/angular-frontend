import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {

    private loginUrl = 'http://localhost:1337';
   

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}
     

    /**
    * Create User
    * @param  {User}        name [description]
    * @return {Promise<User>}      [description]
    */
    signUp(user: User): Promise<User> {
       return this.http
       .post(this.loginUrl + '/signup', user, {headers: this.headers})
       .toPromise()
       .then(res => res.json() as User)
       .catch(this.handleError);
    }

      /**
    * Create User
    * @param  {User}        name [description]
    * @return {Promise<User>}      [description]
    */
    login(email: String, password: String): Promise<User> {
       return this.http
       .post(this.loginUrl + '/login', {
            email: email,
            password: password
        }, {headers: this.headers})
       .toPromise()
       .then(res => res.json() as User)
       .catch(this.handleError);
    }

   /**
    * [handleError description]
    * @param  {any}          error [description]
    * @return {Promise<any>}       [description]
    */
   private handleError(error: any): Promise<any> {
       console.error('An error occurred', error); // for demo purposes only
       return Promise.reject(error.message || error);
   }

}