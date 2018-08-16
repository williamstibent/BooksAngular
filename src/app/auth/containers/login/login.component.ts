import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { IAuth } from '../../models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private zone: NgZone, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  doLogin(event: IAuth) {
    this.authService.login(event)
      .then(
        auth => {
          localStorage.setItem('bzgBooksApp', JSON.stringify(auth));
          this.router.navigate(['main/grid']);
        },
        error => {
          this.snackBar.open(error.message, "error", {
            duration: 2000,
          });
        }
      );
  }

  createUser(event: IAuth) {
    this.authService.createUser(event)
      .then(
        userRecord => {
          this.snackBar.open('Usuario creado', "success", {
            duration: 2000,
          });
          this.router.navigate(['login']);
        },
        error => {
          this.snackBar.open(error.message, "error", {
            duration: 2000,
          });
        }
      )
  }

  signGoogle(event) {
    if (event) {
      this.authService.signInWithGoogle()
        .then(
          data => {
            localStorage.setItem('bzgBooksApp', JSON.stringify(data));
            this.zone.run(() => {
              this.router.navigate(['main/grid']);
            });
          }
        ).catch(
          (err) => {
            this.snackBar.open(err, "error", {
              duration: 2000,
            });
          }
        );
    }
  }
}
