import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
