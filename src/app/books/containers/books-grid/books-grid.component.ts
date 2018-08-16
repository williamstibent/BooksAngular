import { Component, OnInit } from '@angular/core';
import { BooksListService } from "../../services/list/books-list.service";
import { BookList } from '../../model/BookList';
import { PageEvent } from '@angular/material';
@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {

  booksList: BookList;
  length: number;
  pageSize: number;
  pageSizeOptions: number[]

  constructor(private bookService: BooksListService) {
    this.pageSize = 3
    this.pageSizeOptions = [3, 6, 9];
    this.bookService.searchBooks('Colombia', 0, this.pageSize);
  }
  //this.pageEvent.pageIndex

  ngOnInit() {
    this.bookService.booksList
      .subscribe(
        books => {
          if (books) {
            this.booksList = books;
          }
        }
      );

    this.bookService.allBooksList
      .subscribe(
        books => {
          if (books) {
            this.length = this.booksList.totalItems;
          }
        }
      );
  }

  changePage(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.bookService.searchBooks('Colombia', pageEvent.pageIndex * this.pageSize, this.pageSize);
  }

  addFavorite(book) {
    this.bookService.addFavorites(book);
  }
}
