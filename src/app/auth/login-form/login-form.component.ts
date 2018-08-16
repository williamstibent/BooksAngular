import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IAuth, Auth } from '../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<IAuth>();
  @Output() signByGoogle = new EventEmitter<boolean>();
  @Output() createUserO = new EventEmitter<IAuth>();
  @Output() makeLogin = new EventEmitter<IAuth>();

  login: IAuth;

  constructor() {
    this.login = new Auth();
  }

  ngOnInit() {
  }

  submit(){
    this.submitted.emit(this.login);
  }

  signGoogle(){
    this.signByGoogle.emit(true);
  }

  createUser(){
    this.createUserO.emit(this.login);
  }

  doLogin(){
    this.makeLogin.emit(this.login);
  }
}
