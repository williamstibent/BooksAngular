import { Component, OnInit } from '@angular/core';
import { books } from '../../../data-books'

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {

  booksList: any[];
  constructor() { 
    this.booksList = []
  }

  ngOnInit() {
    this.booksList = books.items
  }

}
