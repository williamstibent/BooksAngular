import { Component, OnInit } from '@angular/core';
import { books } from '../../data-books'

@Component({
  selector: 'app-book-grid-template',
  templateUrl: './book-grid-template.component.html',
  styleUrls: ['./book-grid-template.component.css']
})
export class BookGridTemplateComponent implements OnInit {

  booksList: any[];
  constructor() { 
    this.booksList = []
  }

  ngOnInit() {
    this.booksList = books.items
  }

}
