import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './admin/article-list/article-list.component';
import { ArticleCreatorComponent } from './admin/article-creator/article-creator.component';
import { ArticleEditComponent } from './admin/article-edit/article-edit.component';
import { ArticleHomeComponent } from './public/article-home/article-home.component';
import { UrlInjectionGuard } from 'src/app/guards/url-injection.guard';

const routes: Routes = [
  {
    path: 'admin/articles/list',
    component: ArticleListComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/articles/creator',
    component: ArticleCreatorComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/articles/editor/:id',
    component: ArticleEditComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'articles/home',
    component: ArticleHomeComponent
  },
  {
    path: 'admin/articles/list/:authorName',
    component: ArticleListComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
