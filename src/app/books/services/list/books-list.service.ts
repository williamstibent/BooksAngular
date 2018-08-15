import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Observable, of, Subject } from "rxjs";
import { MessagesService } from "../../../alerts/services/messages.service";
import { environment } from '../../../../environments/environment';
import { BookList } from '../../model/BookList';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class BooksListService {

  url = environment.apiBooks;
  booksList: Subject<BookList> = new Subject();
  favsRef: AngularFireList<any>;
  collectionsRef: AngularFireList<any>;
  user: firebase.User;
  fbdb: AngularFireDatabase

  constructor(private http: HttpClient, private alertService: MessagesService, private authFire: AngularFireAuth,
    rdb: AngularFireDatabase, private snackBar: MatSnackBar) {
    this.fbdb = rdb;
    this.booksList.next({ kind: "", totalItems: 0, items: [] });
    authFire.authState
      .subscribe(
        user => {
          this.user = user;
          this.favsRef = rdb.list('favorites/' + this.user.uid);
          this.collectionsRef = rdb.list('collections/' + this.user.uid);
        }
      );
  }

  searchBooks(text: string, startIndex?: number, maxResults?: number) {

    let url = this.url + `volumes?q=${text}`;
    if (startIndex) {
      url += `&startIndex=${startIndex}`;
    }
    if (maxResults) {
      url += `&maxResults=${maxResults}`;
    }

    this.http.get<BookList>(url)
      .pipe(
        catchError(this.handleError<BookList>('Get Books List', null))
      )
      .subscribe(
        (books) => {
          this.booksList.next(books);
        }
      );
  }

  addFavorites(book: any) {
    this.favsRef.push(book).then(_ => this.alertService.message("Agregado a favoritos", "success"));
    this.snackBar.open("Agregado a favoritos", "success", {
      duration: 2000,
    });
  }

  associateBookToCollection($key: string, book: any) {
    this.fbdb.list('collections/' + this.user.uid + '/' + $key + '/books').push(book).then(_ => this.alertService.message("Libro asociado a coleccion", "success"));
    this.snackBar.open("Libro asociado a coleccion", "success", {
      duration: 2000,
    });
  }
  removeFavorite(book: any) {
    const promise = this.favsRef.remove(book.key)
    promise.then(_ => this.alertService.message("Eliminado de Favoritos", "success"));
    this.snackBar.open("Eliminado de favoritos", "success", {
      duration: 2000,
    });
  }

  getBook(id: string): Observable<any> {
    let url = this.url + `volumes/${id}`;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>('Get Book', null))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    let type = "error";
    this.alertService.message(message, type);
  }
}
