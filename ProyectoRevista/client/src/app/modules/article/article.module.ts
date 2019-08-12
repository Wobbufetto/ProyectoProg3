import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleCreatorComponent } from './admin/article-creator/article-creator.component';
import { ArticleEditComponent } from './admin/article-edit/article-edit.component';
import { ArticleHomeComponent } from './public/article-home/article-home.component';
import { ArticleListComponent } from './admin/article-list/article-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArticleCreatorComponent,ArticleEditComponent, ArticleHomeComponent, ArticleListComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ArticleCreatorComponent,
    ArticleEditComponent,
    ArticleListComponent,
    ArticleHomeComponent
  ]
})
export class ArticleModule { }
