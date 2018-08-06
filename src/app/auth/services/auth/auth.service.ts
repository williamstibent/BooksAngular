import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  login(auth : any){
    debugger
    localStorage.setItem('bzgBooksApp', JSON.stringify(auth));
    this.router.navigate(['/']);
  }

  logout(){
    debugger
    localStorage.removeItem('bzgBooksApp');
    this.router.navigate(['/login']);
  }
}