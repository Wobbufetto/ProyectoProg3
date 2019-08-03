import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorListComponent } from './admin/editor-list/editor-list.component';
import { EditorEditComponent } from './admin/editor-edit/editor-edit.component';
import { EditorCreateComponent } from './admin/editor-create/editor-create.component';

const routes: Routes = [
  {
    path: 'admin/editor/list',
    component: EditorListComponent
  },
  {
    path: 'admin/editor/creator',
    component: EditorCreateComponent
  },
  {
    path: 'admin/editor/editor',
    component: EditorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
