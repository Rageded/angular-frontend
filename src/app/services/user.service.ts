import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {

	private userUrl = 'http://localhost:1337/users';
    private loginUrl = 'http://localhost:1337/login';
   

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

	/**
	 * Will do http rquest for users
	 * @return {Promise<User[]>} [description]
	 */
     getUsers():  Promise<User[]> {
         return this.http.get(this.userUrl)
         .toPromise()
         .then(response => {
            return response.json() as User[]
         })
         .catch(this.handleError);
     } // stub


  	/**
  	 * Will get a single user in a http request
  	 * @param  {number}        id [description]
  	 * @return {Promise<User>}    [description]
  	 */
       getUser(id: number): Promise<User> {

           const url = `${this.userUrl}/${id}`;

           return this.http.get(url)
           .toPromise()
           .then(response => response.json() as User)
           .catch(this.handleError);
       }

       /**
        * Update User
        * @param  {User}          user [description]
        * @return {Promise<User>}      [description]
        */
       update(user: User): Promise<User> {
           const url = `${this.userUrl}/${user.id}`;
           return this.http
           .put(url, user, {headers: this.headers})
           .toPromise()
           .then(() => user)
           .catch(this.handleError);
       }

       /**
        * Create User
        * @param  {User}        name [description]
        * @return {Promise<User>}      [description]
        */
       create(user: User): Promise<User> {
           return this.http
           .post(this.userUrl, user, {headers: this.headers})
           .toPromise()
           .then(res => res.json() as User)
           .catch(this.handleError);
       }

        /**
         * delete User
         * @param  {number}        id [description]
         * @return {Promise<void>}    [description]
         */
        delete(id: number): Promise<void> {
             const url = `${this.userUrl}/${id}`;
             return this.http.delete(url, {headers: this.headers})
                .toPromise()
                .then(() => null)
                .catch(this.handleError);
        }


         /**
        * Create User
        * @param  {User}        name [description]
        * @return {Promise<User>}      [description]
        */
        signUp(user: User): Promise<User> {
           return this.http
           .post(this.loginUrl, user, {headers: this.headers})
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