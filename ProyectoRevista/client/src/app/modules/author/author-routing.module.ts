import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './admin/author-list/author-list.component';
import { AuthorCreatorComponent } from './admin/author-creator/author-creator.component';
import { AuthorEditComponent } from './admin/author-edit/author-edit.component';
import { AuthorHomeComponent } from './public/author-home/author-home.component';

const routes: Routes = [
  {
    path: 'admin/author/list',
    component: AuthorListComponent
  },
  {
    path: 'admin/author/creator',
    component: AuthorCreatorComponent
  },
  {
    path: 'admin/author/editor',
    component: AuthorEditComponent
  },
  {
    path: 'author/articles/:authorName',
    component: AuthorHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
