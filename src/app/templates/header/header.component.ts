import { Component, OnInit } from '@angular/core';
import {Login} from '../../../model/login/login';
import {AuthService} from '../../../services/security/auth.service';
import {element} from 'protractor';
import {RegisterUser} from '../../../model/client/RegisterUser/register-user';
import {TokenStorageService} from '../../../services/security/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  registerUser = new RegisterUser();
  login = new Login();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(private auth: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser();
      console.log(this.roles);
    }
  }

  register() {
    this.auth.register(this.registerUser).subscribe(data => {
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      console.log(this.registerUser);
  }, err => {
    this.errorMessage = err.error.errorMessage,
      this.isSignUpFailed = true;
    });
  }

  toLogin() {
    this.auth.login(this.login).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }


}
