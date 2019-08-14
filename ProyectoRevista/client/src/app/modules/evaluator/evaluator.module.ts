import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluatorRoutingModule } from './evaluator-routing.module';
import { EvaluatorListComponent } from './admin/evaluator-list/evaluator-list.component';
import { EvaluatorCreateComponent } from './admin/evaluator-create/evaluator-create.component';
import { EvaluatorEditComponent } from './admin/evaluator-edit/evaluator-edit.component';
import { EvaluatorHomeComponent } from './public/evaluator-home/evaluator-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EvalArticleComponent } from './admin/eval-article/eval-article.component';

@NgModule({
  declarations: [EvaluatorListComponent, EvaluatorCreateComponent, EvaluatorEditComponent, EvaluatorHomeComponent, EvalArticleComponent],
  imports: [
    CommonModule,
    EvaluatorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    EvaluatorListComponent,
    EvaluatorEditComponent,
    EvaluatorCreateComponent
  ]
})
export class EvaluatorModule { }
