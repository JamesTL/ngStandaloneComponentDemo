import { Routes } from '@angular/router';
import { FilmDetailsViewComponent } from './film-details-view/film-details-view.component';
import { FilmListComponent } from './film-list/film-list.component';

export const routes: Routes = [
    { path:'', pathMatch: 'full' , redirectTo:'films'},
    { path: 'films', component: FilmListComponent},
    { path: 'film/:index', component: FilmDetailsViewComponent},
];
