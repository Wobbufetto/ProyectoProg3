import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './admin/article-list/article-list.component';
import { ArticleCreatorComponent } from './admin/article-creator/article-creator.component';
import { ArticleEditComponent } from './admin/article-edit/article-edit.component';
import { ArticleHomeComponent } from './public/article-home/article-home.component';

const routes: Routes = [
  {
    path: 'admin/article/list',
    component: ArticleListComponent
  },
  {
    path: 'admin/article/creator',
    component: ArticleCreatorComponent
  },
  {
    path: 'admin/article/editor',
    component: ArticleEditComponent
  },
  {
    path: '/article/home',
    component: ArticleHomeComponent
  },
  {
    path: 'admin/article/list',
    component: ArticleListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
