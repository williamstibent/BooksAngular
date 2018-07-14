import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavAppComponent } from './top-nav-app/top-nav-app.component';
import { VerticalNavAppComponent } from './vertical-nav-app/vertical-nav-app.component';
import { BooksContentComponent } from './books-content/books-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavAppComponent,
    VerticalNavAppComponent,
    BooksContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
