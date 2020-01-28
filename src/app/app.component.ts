import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../services/security/token-storage.service';
import {RegisterUser} from '../model/client/RegisterUser/register-user';
import {UserService} from '../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  title = 'pet-shop-front';
  user: RegisterUser;
  private authority: string;
  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log(user);
      this.roles = this.tokenStorageService.getAuthorities();

    //  this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
 //     this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      console.log('app - roles: ' + this.roles);

      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          console.log(this.authority);
          this.showAdminBoard = true;
          return false;
        } else {
          this.authority = 'user';
          console.log(this.authority);
          return true;
        }
      });
    }

   /* if (this.tokenStorageService.getToken()) {
       this.user = this.tokenStorageService.getUser();
      this.roles = this.tokenStorageService.getAuthorities();
      this.username = this.user.userName;
      console.log(this.user)
      console.log(this.roles);
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          console.log(this.authority);
          return false;
        }else{
        this.authority = 'user';
          console.log(this.authority);
        return true;

      }

      });
    }*/
  }


  getUserByUserName() {
      this.router.navigate(['/user/' + this.username]);
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  getAdminPage() {
    this.router.navigate(['/admin/orders/']);
  }
}
