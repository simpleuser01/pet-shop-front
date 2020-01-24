import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../../model/login/login';
import {RegisterUser} from '../../model/client/RegisterUser/register-user';

const AUTH_API = 'http://localhost:8080/petshop.by/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: Login): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: RegisterUser): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      firstName: user.firstName,
      lastName: user.lastName,
      tel: user.tel,
      email: user.email,
      userName: user.userName,
      password: user.password
    }, httpOptions);
  }

}
