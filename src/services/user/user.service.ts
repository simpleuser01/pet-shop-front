import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterUser} from "../../model/client/RegisterUser/register-user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/petshop.by';
  constructor(private http: HttpClient) { }


  getUserByUserName(userName: string) : Observable<RegisterUser>{
    return this.http.get<RegisterUser>(this.url + '/user/' + `${userName}`);
  }
}
