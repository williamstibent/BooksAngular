import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksGridComponent } from "../books/containers/books-grid/books-grid.component";
import { Routes, RouterModule} from "@angular/router";
const routes: Routes = [
  {
    path: '',
    component: BooksGridComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BooksGridComponent]
})
export class BooksModule { }
