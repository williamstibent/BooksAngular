import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FormsModule } from '@angular/forms'
import { routes } from "./auth.routes";
import { MaterialModule } from "../material.module";
import { LoginFormComponent } from './login-form/login-form.component';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule { }
