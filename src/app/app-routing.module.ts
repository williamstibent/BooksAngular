import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { BookMainComponent } from './book-main/book-main.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { BookDetailComponent } from './book-detail/book-detail.component'
import { CollectionsComponent } from "./collections/collections.component";
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: BookMainComponent
      },
      {
        path: 'collections',
        component: CollectionsComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: 'detail/:id',
        component: BookDetailComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
