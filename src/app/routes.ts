import { Routes } from '@angular/router'
import { BookMainComponent } from './book-main/book-main.component'
import { CollectionsComponent } from './collections/collections.component'
import { FavoritesComponent } from './favorites/favorites.component'
import { BookDetailComponent } from './book-detail/book-detail.component'

export const routes: Routes = [
    {
        path: '',
        component: BookMainComponent
    },
    {
        path: 'collections',
        component: CollectionsComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: 'detail/:id',
        component: BookDetailComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]