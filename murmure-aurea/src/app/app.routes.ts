import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bibliotheque', component: LibraryComponent },
    { path: '**', redirectTo: '' }
];
