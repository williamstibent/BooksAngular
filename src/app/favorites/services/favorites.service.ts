import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { MessagesService } from '../../alerts/services/messages.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private alertService: MessagesService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) {
    authFire.authState
      .subscribe(
        user => {
          this.user = user;
          this.favsRef = rdb.list('favorites/' + this.user.uid);
        }
      );

  }

  listFavorites(): AngularFireList<any[]> {
    return this.favsRef;
  }
}