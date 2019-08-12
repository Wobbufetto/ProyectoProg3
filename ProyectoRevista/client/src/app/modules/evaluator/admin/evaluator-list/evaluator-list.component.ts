import { Component, OnInit } from '@angular/core';
import { EvaluatorService } from 'src/app/services/evaluator.service';
import { EvaluatorModel } from 'src/app/models/evaluator.model';

@Component({
  selector: 'app-evaluator-list',
  templateUrl: './evaluator-list.component.html',
  styleUrls: ['./evaluator-list.component.css']
})
export class EvaluatorListComponent implements OnInit {

  constructor(private evaService: EvaluatorService) { }

  evaluatorList : EvaluatorModel[] = [];
  ngOnInit() {
    this.getAllEvaluators();
  }

  getAllEvaluators():void{
    this.evaService.getAllEvaluators().subscribe(items =>{
      this.evaluatorList = items;
    })
  }

}
