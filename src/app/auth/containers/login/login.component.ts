import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { IAuth } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  login(event: IAuth) {
    //
    this.authService.login(event)
      .then(
        auth => {
          localStorage.setItem('bzgBooksApp', JSON.stringify(auth));
          this.router.navigate(['main']);
        },
        error => {
          alert(error.message);
        }
      );
  }

  signGoogle(event) {
    if (event) {
      this.authService.signInWithGoogle()
        .then(
          data => {
            localStorage.setItem('bzgBooksApp', JSON.stringify(data));
            this.zone.run(() => {
              this.router.navigate(['main/books/list']);
            });
          }
        ).catch(
          (err) => {
            console.log(err);
          }
        );
    }
  }
}
