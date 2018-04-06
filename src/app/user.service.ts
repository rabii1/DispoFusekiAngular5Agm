import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public isUserLoggedIn;
  public username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
   // alert("islogged");
    this.isUserLoggedIn = true;
    this.username = 'admin';
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
