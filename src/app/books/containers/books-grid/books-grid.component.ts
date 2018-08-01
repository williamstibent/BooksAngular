import { Component, OnInit } from '@angular/core';
import { BooksListService } from "../../services/list/books-list.service";
@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {

  booksList: any[];
  constructor(private bookService: BooksListService) { 
    this.booksList = []
  }

  ngOnInit() {
    this.bookService.getBookList()
    .subscribe(
      books => {
        this.booksList = books;
      }
    );
  }
}
