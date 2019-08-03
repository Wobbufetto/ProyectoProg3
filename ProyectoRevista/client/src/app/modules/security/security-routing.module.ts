import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCreatorComponent } from './users/user-creator/user-creator.component';
import { UserEditorComponent } from './users/user-editor/user-editor.component';

const routes: Routes = [
  {
    path: 'admin/user/list',
    component: UserListComponent
  },
  {
    path: 'admin/user/creator',
    component: UserCreatorComponent
  },
  {
    path: 'admin/user/editor',
    component: UserEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
