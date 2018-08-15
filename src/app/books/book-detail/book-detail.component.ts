import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { BooksListService } from "../services/list/books-list.service";
import { Observable } from 'rxjs';
import { Collection } from '../../collections/models/collection';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: any
  collectionList: Collection[];
  selectedCollection: string;

  constructor(private router: ActivatedRoute, private bookService: BooksListService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) {
    this.book = {}
    this.collectionList = null;
    this.selectedCollection = null;
  }

  ngOnInit() {
    let id: string
    this.router.params.subscribe((params: Params) => {
      id = params.id;
      this.bookService.getBook(id)
        .subscribe(
          books => {
            if (books) {
              this.book = books;
            }
          }
        );
    });
    this.getListCollections();
  }

  addFavorite() {
    this.bookService.addFavorites(this.book);
  }

  getListCollections(){
    this.authFire.authState
      .subscribe(
        user => {
          this.rdb.list('collections/' + user.uid).snapshotChanges()
          .subscribe(item => {
            this.collectionList = [];
            item.forEach(element => {
              let x = element.payload.toJSON();
              x["$key"] = element.key;
              this.collectionList.push(x as Collection);
            });
          });
        }
      );
  }

  associateBookToCollection() {
    this.bookService.associateBookToCollection(this.selectedCollection, this.book);
  }

}
