import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksGridComponent } from "./containers/books-grid/books-grid.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { Routes, RouterModule} from "@angular/router";
const routes: Routes = [
  {
    path: '',
    component: BooksGridComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  },
  {
    path:'**',
    redirectTo: '/'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BooksGridComponent, BookDetailComponent]
})
export class BooksModule { }
