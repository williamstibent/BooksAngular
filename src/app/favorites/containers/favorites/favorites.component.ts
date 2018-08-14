import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  bookList: Observable<any[]>;

  constructor(private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) {
    this.bookList = null;
  }

  ngOnInit() {
    this.authFire.authState
      .subscribe(
        user => {
          this.bookList = this.rdb.list('favorites/' + user.uid)
            .snapshotChanges().pipe(
              map(changes =>
                changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
              )
            );
        }
      );
  }
}
