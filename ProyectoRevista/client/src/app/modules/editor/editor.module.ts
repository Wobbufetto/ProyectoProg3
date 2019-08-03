import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorListComponent } from './admin/editor-list/editor-list.component';
import { EditorCreateComponent } from './admin/editor-create/editor-create.component';
import { EditorEditComponent } from './admin/editor-edit/editor-edit.component';
import { EditorHomeComponent } from './public/editor-home/editor-home.component';

@NgModule({
  declarations: [EditorListComponent, EditorCreateComponent, EditorEditComponent, EditorHomeComponent],
  imports: [
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
