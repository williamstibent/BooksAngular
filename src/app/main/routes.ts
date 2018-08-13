import { Routes } from '@angular/router';
import { MainComponent } from "./containers/main/main.component";
import { AuthGuardService } from '../auth/services/guards/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'grid',
                loadChildren: '../books/books.module#BooksModule',
                canActivate: [AuthGuardService]
            },
            {
                path: 'collections',
                loadChildren: '../collections/collections.module#CollectionsModule',
                canActivate: [AuthGuardService]
            },
            {
                path: 'favorites',
                loadChildren: '../favorites/favorites.module#FavoritesModule',
                canActivate: [AuthGuardService]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'grid'
    }
];