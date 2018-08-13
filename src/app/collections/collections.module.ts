import { NgModule } from '@angular/core';


import { Routes, RouterModule } from "@angular/router";
import { CollectionsComponent } from "./containers/collections/collections.component";
import { MaterialModule } from "../material.module";
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionsComponent]
})
export class CollectionsModule { }
