import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from 'src/categories/categories.component';
import { NotFoundComponent } from 'src/shared/components/not-found/not-found.component';
import { RessourcesComponent } from 'src/ressources/ressources.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'ressources',
    component: RessourcesComponent
  },
  {
    path: 'ressources/:id/:nom',
    component: RessourcesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
