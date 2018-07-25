import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { routes } from "./auth.routes";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
