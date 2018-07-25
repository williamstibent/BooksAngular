import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksGridComponent } from "../books/containers/books-grid/books-grid.component";
import { BookDetailComponent } from "../books/book-detail/book-detail.component";
import { Routes, RouterModule} from "@angular/router";
const routes: Routes = [
  {
    path: '',
    component: BooksGridComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
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
