import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { BooksListService } from "../services/list/books-list.service";
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: any

  constructor(private router: ActivatedRoute, private bookService: BooksListService) {
    this.book = {}
   }

  ngOnInit() {
    let id: string
    //id = this.router.snapshot.paramMap.get('id')
    this.router.params.subscribe((params: Params) => {
      id = params.id;
      this.bookService.getBookList(id)
        .subscribe(
          books => {            
            this.book = books[0];
          }
        );
    });
  }

}
