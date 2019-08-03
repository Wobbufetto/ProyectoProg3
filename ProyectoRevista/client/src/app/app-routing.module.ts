import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleModule } from './modules/article/article.module';
import { AuthorModule } from './modules/author/author.module';
import { EditorModule } from './modules/editor/editor.module';
import { EvaluatorModule } from './modules/evaluator/evaluator.module';
import { SecurityModule } from './modules/security/security.module';
import { HomeComponent } from './template/home/home.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ArticleModule,
    AuthorModule,
    EditorModule,
    EvaluatorModule,
    SecurityModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
