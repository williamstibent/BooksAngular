import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'node_modules/rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Auth } from '../../models/user';
import * as firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private router: Router, private authFire: AngularFireAuth) {
    this.user = authFire.authState;

    this.user
      .subscribe(
        (user) => {
          if (user)
            this.userDetails = user;
          else
            this.userDetails = null;
        }
      );
  }

  signInWithGoogle() {
    return this.authFire.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  login(auth: Auth) {
    return this.authFire.auth.signInWithEmailAndPassword(auth.email, auth.password)
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('bzgBooksApp');
    this.authFire.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }

  profile() {
    return this.userDetails;
  }
}
