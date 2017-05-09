import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AuthorComponent } from './author/author.component';

export const router: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: '', component: AppComponent },
  { path: 'author', component: AuthorComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
