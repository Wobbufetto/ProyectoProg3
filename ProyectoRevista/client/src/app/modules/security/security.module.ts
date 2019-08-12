import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { RegisterComponent } from './users/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { ReloginComponent } from './relogin/relogin.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogoutComponent, ReloginComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    RecaptchaModule,
    ReactiveFormsModule
  ],
  exports:[
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ReloginComponent
  ]
})
export class SecurityModule { }
