import { Component, OnInit } from '@angular/core';
import { BooksListService } from "../../services/list/books-list.service";
import { BookList } from '../../model/BookList';
@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {

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
  addFavorite(book){
    this.bookService.addFavorites(book);
  }
}
