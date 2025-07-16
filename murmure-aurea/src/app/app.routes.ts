import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthorComponent } from './pages/author/author.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bibliotheque', component: LibraryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'auteure', component: AuthorComponent },
    { path: '**', redirectTo: '' }
];
