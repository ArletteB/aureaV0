import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bibliotheque', component: LibraryComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
