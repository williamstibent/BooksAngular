import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule',
  },
  {
    path:'**',
    redirectTo:'main/grid',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
