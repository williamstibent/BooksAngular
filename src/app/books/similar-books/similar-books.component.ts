import { Component, OnInit } from '@angular/core';
import { BookList } from '../model/BookList';
import { BooksListService } from '../services/list/books-list.service';

@Component({
  selector: 'similar-books',
  templateUrl: './similar-books.component.html',
  styleUrls: ['./similar-books.component.css']
})
export class SimilarBooksComponent implements OnInit {

  booksList: BookList;
  constructor(private bookService: BooksListService) {
  }

  ngOnInit() {
    this.bookService.booksList
      .subscribe(
        books => {
          if (books) {
            this.booksList = books;
          }
        }
      );
  }

}
