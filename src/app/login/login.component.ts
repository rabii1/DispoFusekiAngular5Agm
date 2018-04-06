import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {connectableObservableDescriptor} from 'rxjs/observable/ConnectableObservable';
import {RestService} from '../services/rest.service';
import {UserService} from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public user:UserService ) { }

  ngOnInit() {

  }


  loginn(e) {

var connect;
    e.preventDefault();
    console.log(e);
    var email=e.target.elements[0].value;
    var pwd=e.target.elements[1].value;
    if (email == 'admin' && pwd == 'admin') {
      this.user.setUserLoggedIn();
     console.log(this.user.isUserLoggedIn);
      console.log( this.user.username);
      console.log("nkj");

      this.router.navigate(['home']);
    }
    else
    {
      this.router.navigate(['']);
      e.target.elements[0].value="";
      e.target.elements[1].value="";

    }
  }


}
