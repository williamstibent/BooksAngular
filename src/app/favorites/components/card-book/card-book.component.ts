import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { BooksListService } from '../../../books/services/list/books-list.service';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css']
})
export class CardBookComponent implements OnInit {

  @Input() book: any

  constructor(private router: ActivatedRoute, private bookService: BooksListService) {
    this.book = {}
  }


  ngOnInit() {
  }

  removeFavorite() {
    this.bookService.removeFavorite(this.book)
  }

}
