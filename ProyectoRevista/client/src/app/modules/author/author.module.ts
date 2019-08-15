import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorListComponent } from './admin/author-list/author-list.component';
import { AuthorCreatorComponent } from './admin/author-creator/author-creator.component';
import { AuthorEditComponent } from './admin/author-edit/author-edit.component';
import { AuthorHomeComponent } from './public/author-home/author-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthorListComponent, AuthorCreatorComponent, AuthorEditComponent, AuthorHomeComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AuthorListComponent,
    AuthorCreatorComponent,
    AuthorEditComponent
  ]
})
export class AuthorModule { }
