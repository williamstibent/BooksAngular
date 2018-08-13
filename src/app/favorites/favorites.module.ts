import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBookComponent } from './components/card-book/card-book.component';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { FavoritesComponent } from './containers/favorites/favorites.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardBookComponent, FavoritesComponent]
})
export class FavoritesModule { }
