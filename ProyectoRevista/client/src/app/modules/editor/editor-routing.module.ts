import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorListComponent } from './admin/editor-list/editor-list.component';
import { EditorEditComponent } from './admin/editor-edit/editor-edit.component';
import { EditorCreateComponent } from './admin/editor-create/editor-create.component';
import { UrlInjectionGuard } from 'src/app/guards/url-injection.guard';

const routes: Routes = [
  {
    path: 'admin/editor/list',
    component: EditorListComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/editor/creator',
    component: EditorCreateComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/editor/editor/:id',
    component: EditorEditComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
