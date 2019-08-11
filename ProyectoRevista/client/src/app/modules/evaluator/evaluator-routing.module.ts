import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluatorListComponent } from './admin/evaluator-list/evaluator-list.component';
import { EvaluatorCreateComponent } from './admin/evaluator-create/evaluator-create.component';
import { EvaluatorEditComponent } from './admin/evaluator-edit/evaluator-edit.component';
import { UrlInjectionGuard } from 'src/app/guards/url-injection.guard';

const routes: Routes = [
  {
    path: 'admin/evaluator/list',
    component: EvaluatorListComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/evaluator/creator',
    component: EvaluatorCreateComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/evaluator/editor',
    component: EvaluatorEditComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluatorRoutingModule { }
