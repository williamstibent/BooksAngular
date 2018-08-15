import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {

  user: firebase.User;
  booksCollections: any[];

  constructor(private router: ActivatedRoute, private authFire: AngularFireAuth, private rdb: AngularFireDatabase) {
    this.booksCollections = null;
  }

  ngOnInit() {
    let id: string
    this.router.params.subscribe((params: Params) => {
      id = params.id;
      this.authFire.authState
      .subscribe(
        user => {
          this.rdb.list('collections/' + this.user.uid + '/' + id + '/books').snapshotChanges()
          .subscribe(item => {
            this.booksCollections = [];
            item.forEach(element => {
              let x = element.payload.toJSON();
              x["$key"] = element.key;
              this.booksCollections.push(x as any);
            });
          });
        }
      )
    });
  }

}
