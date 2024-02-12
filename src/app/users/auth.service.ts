import { Injectable } from '@angular/core';
import { CoolLocalStorage } from '@angular-cool/storage';
import { UserDto } from './dto/UserDto';
import { Router } from '@angular/router';

const AUTH_KEY = "userAuth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorage: CoolLocalStorage,
              private router: Router) { }

  login(user: UserDto | null) {
    if (user !== null) {
      this.localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    }
  }

  logout() {
    this.localStorage.removeItem(AUTH_KEY);
    this.router.navigate(["users/login"]);
  }

  checkAuth() {
    if (!this.isAuth()) {
      this.router.navigate(["users/login"]);
    }
  }

  isAuth(): boolean {
    const json = this.localStorage.getItem(AUTH_KEY);

    if (json === null) {
      return false
    }

    return true;
  }

  getAuthUser(): UserDto | null {
    const json = this.localStorage.getItem(AUTH_KEY);

    if (json === null) {
      return null;
    }

    return JSON.parse(json);
  }
}
