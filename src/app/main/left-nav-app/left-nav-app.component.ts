import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, state, style, animate } from "@angular/animations";
import { AuthService } from '../../auth/services/auth/auth.service';
import * as firebase from "firebase/app";
import { AngularFireAuth } from 'angularfire2/auth';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'left-nav-app',
  templateUrl: './left-nav-app.component.html',
  styleUrls: ['./left-nav-app.component.css'],
  animations: [
    trigger('asideCollapse', [
      state('close', style({
        width: '100px'
      })),
      state('open', style({
        width: '350px'
      })),
      transition('open => close', animate('500ms ease-out')),
      transition('close => open', animate('500ms ease-in'))
    ])
  ]
})
export class LeftNavComponent implements OnInit {

  @Input() asideState: string
  today: Date
  user: firebase.User;

  constructor(private authService: AuthService, private authFire: AngularFireAuth, private dialog: MatDialog) {
    this.today = new Date()
  }
  
  ngOnInit() {
    this.authFire.authState
    .subscribe(
      user => {
        this.user = user;
      }
    );
  }

  logout() {
    if (confirm('¿Estás seguro que deseas salir?'))
      this.authService.logout();
  }
}
