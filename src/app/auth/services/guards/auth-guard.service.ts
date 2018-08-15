import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    if(!this.authService.isLoggedIn() && !localStorage.getItem('bzgBooksApp')){
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }

  canActivateChild(): Observable<boolean> {
    if(!this.authService.isLoggedIn() && !localStorage.getItem('bzgBooksApp')){
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }
}
