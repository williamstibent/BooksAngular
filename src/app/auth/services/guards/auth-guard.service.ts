import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild  {

  constructor(private router: Router) { }

  canActivate():Observable<boolean>{
    debugger
    if(!localStorage.getItem('bzgBooksApp')){
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }

  canActivateChild():Observable<boolean>{
    debugger
    if(!localStorage.getItem('bzgBooksApp')){
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }
}
