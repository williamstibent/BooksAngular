import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-aside-right-profile',
  templateUrl: './aside-right-profile.component.html',
  styleUrls: ['./aside-right-profile.component.css']
})
export class AsideRightProfileComponent implements OnInit {

  user: firebase.User;
  favoriteNumber: any;
  collectionsNumber: any;

  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase) {
    this.authFire.authState
      .subscribe(
        user => {
          this.user = user;
          this.rdb.list('favorites/' + user.uid).snapshotChanges()
          .subscribe(item => {
            this.favoriteNumber = item.length;
          });
          this.rdb.list('collections/' + user.uid).snapshotChanges()
          .subscribe(item => {
            this.collectionsNumber = item.length;
          });
        }
      )
  }

  ngOnInit() {
  }
}