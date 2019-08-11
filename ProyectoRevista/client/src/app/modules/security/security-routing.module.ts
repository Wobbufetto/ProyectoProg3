import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { FormLoginGuard } from 'src/app/guards/form-login.guard';
import { UrlInjectionGuard } from 'src/app/guards/url-injection.guard';

const routes: Routes = [
  {
    path: 'user/registy',
    component: RegisterComponent,
    canActivate: [
      FormLoginGuard
    ]
  },
  {
    path: 'user/login',
    component: LoginComponent,
    canActivate: [
      FormLoginGuard
    ]
  },
  {
    path: 'user/logout',
    component: LogoutComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
