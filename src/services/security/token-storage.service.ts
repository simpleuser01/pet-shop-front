import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'AuthUsername';
const  AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
      return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: string) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
  }

  public getUser() {
    return sessionStorage.getItem(USER_KEY);
  }


   public saveAuthorities(authorities: string[]) {
     window.sessionStorage.removeItem(AUTHORITIES_KEY);
     window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
   }

   public getAuthorities(): string[] {
   this.roles = [];

   if (sessionStorage.getItem(TOKEN_KEY)) {

         JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
           this.roles.push(authority.authority);
       });
     }

   return this.roles;
}
}
