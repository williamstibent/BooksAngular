import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { MessagesService } from '../../alerts/services/messages.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  url = environment.apiBooks;
  collectionsRef: AngularFireList<any>;
  user: firebase.User;

  constructor(private alertService: MessagesService, private authFire: AngularFireAuth,
    rdb: AngularFireDatabase, private snackBar: MatSnackBar) {
      authFire.authState
      .subscribe(
        user => {
          this.user = user;
          this.collectionsRef = rdb.list('collections/' + this.user.uid);
        }
      );
  }

  addCollection(collection: any) {
    this.collectionsRef.push(collection).then(_ => this.alertService.message("Coleccion agregada", "success"));
    this.snackBar.open("Coleccion agregada", "success", {
      duration: 2000,
    });
  }

  removeCollection($key: string) {
    this.collectionsRef.remove($key).then(_ => this.alertService.message("Coleccion eliminada", "success"));
    this.snackBar.open("Coleccion eliminada", "success", {
      duration: 2000,
    });
  }
}
