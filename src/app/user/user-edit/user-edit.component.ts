import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user/user.service';
import {RegisterUser} from '../../../model/client/RegisterUser/register-user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
    userName: string;
    changedUser: RegisterUser;
  constructor(private actRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userName = this.actRoute.snapshot.params.userName;
    this.getChangedUser();
  }


  getChangedUser() {
    this.userService.getUserByUserName(this.userName).subscribe(data => this.changedUser = data);
  }
}
