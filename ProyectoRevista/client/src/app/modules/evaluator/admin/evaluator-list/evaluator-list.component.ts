import { Component, OnInit } from '@angular/core';
import { EvaluatorService } from 'src/app/services/evaluator.service';
import { EvaluatorModel } from 'src/app/models/evaluator.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluator-list',
  templateUrl: './evaluator-list.component.html',
  styleUrls: ['./evaluator-list.component.css']
})
export class EvaluatorListComponent implements OnInit {

  constructor(private evaService: EvaluatorService, private route: Router) { }

  showConfirmationButtons: boolean = false;

  evaluatorList: EvaluatorModel[] = [];

  idToSHowButtons: string = '';

  ngOnInit() {
    this.getAllEvaluators();
  }

  getAllEvaluators(): void {
    this.evaService.getAllEvaluators().subscribe(items => {
      this.evaluatorList = items;
    })
  }

  ChangeConfirmationButtons(id) {
    this.idToSHowButtons = id;
    this.showConfirmationButtons = !this.showConfirmationButtons;
  }

  deleteEvaluator(evalId: string): void {
    this.evaService.deleteEvaluator(evalId).subscribe(item => {
      console.log(item);
      this.route.navigate(["/admin/evaluator/list"]);
      location.reload();
    })
  }

}
