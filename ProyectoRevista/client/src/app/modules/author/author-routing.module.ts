import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './admin/author-list/author-list.component';
import { AuthorCreatorComponent } from './admin/author-creator/author-creator.component';
import { AuthorEditComponent } from './admin/author-edit/author-edit.component';
import { AuthorHomeComponent } from './public/author-home/author-home.component';
import { UrlInjectionGuard } from 'src/app/guards/url-injection.guard';

const routes: Routes = [
  {
    path: 'admin/author/list',
    component: AuthorListComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/author/creator',
    component: AuthorCreatorComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/author/editor',
    component: AuthorEditComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'author/articles/:authorName',
    component: AuthorHomeComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
