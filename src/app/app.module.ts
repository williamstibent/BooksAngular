import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes'
import { AppComponent } from './app.component';
import { TopNavAppComponent } from './top-nav-app/top-nav-app.component';
import { VerticalNavAppComponent } from './vertical-nav-app/vertical-nav-app.component';
import { BooksContentComponent } from './books-content/books-content.component';
import { BookListMainComponent } from './book-list-main/book-list-main.component';
import { BookMainComponent } from './book-main/book-main.component';
import { CollectionsComponent } from './collections/collections.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavAppComponent,
    VerticalNavAppComponent,
    BooksContentComponent,
    BookListMainComponent,
    BookMainComponent,
    CollectionsComponent,
    FavoritesComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
