import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../services/security/token-storage.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
   /* if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      console.log(this.roles);
    }*/
  }
}
