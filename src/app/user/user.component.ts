import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {RegisterUser} from "../../model/client/RegisterUser/register-user";
import {TokenStorageService} from "../../services/security/token-storage.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  registerUser :RegisterUser;
  isLoggedIn = false;
  constructor(private  userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {

      const user = this.tokenStorageService.getUser();
      console.log(user.username);
      this.userService.getUserByUserName(user.username).subscribe(data => this.registerUser = data);

    //this.userService.getUserByUserName('user2').subscribe(data => this.registerUser = data);
  }


 /* getUserInfo(userName: string){

    this.userService.getUserByUserName(userName).subscribe(data => this.user  = data);

  }*/

}
