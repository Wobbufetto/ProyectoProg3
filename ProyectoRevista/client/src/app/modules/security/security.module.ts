import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { RegisterComponent } from './users/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class SecurityModule { }
