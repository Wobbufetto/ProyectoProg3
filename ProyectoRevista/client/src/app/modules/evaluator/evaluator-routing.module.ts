import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluatorListComponent } from './admin/evaluator-list/evaluator-list.component';
import { EvaluatorCreateComponent } from './admin/evaluator-create/evaluator-create.component';
import { EvaluatorEditComponent } from './admin/evaluator-edit/evaluator-edit.component';

const routes: Routes = [
  {
    path: 'admin/evaluator/list',
    component: EvaluatorListComponent
  },
  {
    path: 'admin/evaluator/creator',
    component: EvaluatorCreateComponent
  },
  {
    path: 'admin/evaluator/editor',
    component: EvaluatorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluatorRoutingModule { }
