import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CollectionsComponent } from "./containers/collections/collections.component";
import { MaterialModule } from "../material.module";
import { CommonModule } from '@angular/common';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { FormsModule } from '@angular/forms';
import { BooksGridComponent } from './components/books-grid/books-grid.component'

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  },
  {
    path: 'detail/:id',
    component: BooksGridComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [CollectionsComponent, CardCollectionComponent, BooksGridComponent]
})
export class CollectionsModule { }
