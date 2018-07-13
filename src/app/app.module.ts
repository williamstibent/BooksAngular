import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavAppComponent } from './top-nav-app/top-nav-app.component';
import { VerticalNavAppComponent } from './vertical-nav-app/vertical-nav-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavAppComponent,
    VerticalNavAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
