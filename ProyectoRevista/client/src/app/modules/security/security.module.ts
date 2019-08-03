import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCreatorComponent } from './users/user-creator/user-creator.component';
import { UserEditorComponent } from './users/user-editor/user-editor.component';

@NgModule({
  declarations: [UserListComponent, UserCreatorComponent, UserEditorComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  exports:[
    UserListComponent,
    UserEditorComponent,
    UserCreatorComponent
  ]
})
export class SecurityModule { }
