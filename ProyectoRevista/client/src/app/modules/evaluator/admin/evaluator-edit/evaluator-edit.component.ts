import { Component, OnInit } from '@angular/core';
import { EvaluatorService } from 'src/app/services/evaluator.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluatorModel } from 'src/app/models/evaluator.model';

@Component({
  selector: 'app-evaluator-edit',
  templateUrl: './evaluator-edit.component.html',
  styleUrls: ['./evaluator-edit.component.css']
})
export class EvaluatorEditComponent implements OnInit {

  constructor(private evaService: EvaluatorService, private route: ActivatedRoute, private router: Router) { }

  evaluator : EvaluatorModel = {
    id: null,
    firstName: null,
    secondName: null,
    firstSurname: null,
    secondSurname: null,
    country: null,
    cellPhone: null,
    email: null,
    membership: null,
    education: null,
    speciality: null,
    state: null
  }
  ngOnInit() {
    this.searchEvaluator();
  }

  searchEvaluator(): void {
    let id = this.route.snapshot.params["id"];
    this.evaService.getEvaluatorById(id).subscribe(item => {
      this.evaluator = item;
    });
  }

  updateEvaluator() {
    this.evaService.updateEvaluator(this.evaluator).subscribe(item => {
      alert("This article has been updated successfuly!");
      this.router.navigate(["/admin/evaluator/list"])
    })
  }

}
