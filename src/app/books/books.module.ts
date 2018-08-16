import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksGridComponent } from "./containers/books-grid/books-grid.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { Routes, RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { SimilarBooksComponent } from './similar-books/similar-books.component'
import { MaterialModule } from '../material.module';
import { BookRatingComponent } from './book-rating/book-rating.component';

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
    redirectTo: ''
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialModule
  ],
  declarations: [BooksGridComponent, BookDetailComponent, SimilarBooksComponent, BookRatingComponent]
})
export class BooksModule { }
