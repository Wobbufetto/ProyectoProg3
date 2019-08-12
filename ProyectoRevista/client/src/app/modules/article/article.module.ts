import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleCreatorComponent } from './admin/article-creator/article-creator.component';
import { ArticleEditComponent } from './admin/article-edit/article-edit.component';
import { ArticleHomeComponent } from './public/article-home/article-home.component';
import { ArticleListComponent } from './admin/article-list/article-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleEditionComponent } from './public/article-edition/article-edition.component';
import { CreateEditionComponent } from './admin/create-edition/create-edition.component';

@NgModule({
  declarations: [ArticleCreatorComponent,ArticleEditComponent, ArticleHomeComponent, ArticleListComponent, ArticleEditionComponent, CreateEditionComponent],
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
