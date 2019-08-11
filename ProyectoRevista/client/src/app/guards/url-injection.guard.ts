import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UrlInjectionGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {

  }

  canActivate() {
    if (isNullOrUndefined(this.userService.getUserInformation())) {
      this.router.navigate(["/user/login"]);
      return false;
    } else {
      return true;
    }

  }
}
