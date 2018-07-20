import { Component, OnInit } from '@angular/core';
import { books } from '../data-books'

@Component({
  selector: 'app-book-main',
  templateUrl: './book-main.component.html',
  styleUrls: ['./book-main.component.css']
})
export class BookMainComponent implements OnInit {

  booksList: any[];
  constructor() { 
    this.booksList = []
  }

  ngOnInit() {
    this.booksList = books.items
  }

}
