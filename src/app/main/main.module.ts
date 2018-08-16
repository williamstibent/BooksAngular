import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MainComponent } from "./containers/main/main.component";
import { LeftNavComponent } from "./left-nav-app/left-nav-app.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { TopNavAppComponent } from "./top-nav-app/top-nav-app.component";
import { routes } from "./routes";
import { MaterialModule } from '../material.module';
import { EmailPipe } from "../app-pipes/pipes/email.pipe";
import { SearchFormComponent } from './search-form/search-form.component';
import { AsideRightProfileComponent } from './aside-right-profile/aside-right-profile.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainComponent, LeftNavComponent, SearchFormComponent,
    MainContentComponent, TopNavAppComponent, EmailPipe, AsideRightProfileComponent],
  exports: [MainComponent]
})
export class MainModule { }
