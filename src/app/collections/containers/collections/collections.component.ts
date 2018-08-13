import { Component, OnInit } from '@angular/core';
import { BookList } from '../../../books/model/BookList';
import { BooksListService } from '../../../books/services/list/books-list.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  booksList: BookList;
  constructor(private bookService: BooksListService) {
    this.bookService.searchBooks('Colombia');
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
