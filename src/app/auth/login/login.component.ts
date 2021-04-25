import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import { Globals } from '../../_utlity/globals';
// import * as constants from "../../_utlity/constants";
// import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //constructor(private router:Router, private _global: Globals, private auth: AuthService) { }
  constructor(private router:Router) { }
  user = {email:'',password:''};
  // onSubmit() 
  // { 
  //   if(this.user.email=="admin" && this.user.password=="admin123"){
  //     this._global.authorization_token="kjfkdjfkdjfkdj343353";
  //     console.log(constants.messages.successLogin);
  //     this.auth.sendToken(this.user.email);
  //     this.router.navigate(['home']);
  //   }
  // }
  onSubmit() { 
    if(this.user.email=="admin" && this.user.password=="admin123"){
      this.router.navigate(['home']);
    }
  }
}
