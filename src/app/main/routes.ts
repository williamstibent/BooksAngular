import { Routes } from '@angular/router';
import { MainComponent } from "./containers/main/main.component";
/* import { FavoritesComponent } from '../favorites/favorites.component'; */

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'collections',
                loadChildren: '../collections/collections.module#CollectionsModule'
            }/* ,
            {
                path: 'favorites',
                component: FavoritesComponent,
                loadChildren: 'favorites'
            } */

        ]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];