import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedUser: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Perform authentication logic here (e.g., making an API call to verify credentials)
    // Assuming successful authentication for demonstration purposes
    this.isAuthenticatedUser = true;
    console.log("user logged in")
    return true;
  }

  logout(): void {
    // Perform logout logic here
    this.isAuthenticatedUser = false;
  }

  isAuthenticated(): boolean {
    // return this.isAuthenticatedUser;
    return true;
  }
}
