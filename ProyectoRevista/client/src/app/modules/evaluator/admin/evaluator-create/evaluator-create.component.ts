import { Component, OnInit } from '@angular/core';
import { EvaluatorService } from 'src/app/services/evaluator.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EvaluatorModel } from 'src/app/models/evaluator.model';

@Component({
  selector: 'app-evaluator-create',
  templateUrl: './evaluator-create.component.html',
  styleUrls: ['./evaluator-create.component.css']
})
export class EvaluatorCreateComponent implements OnInit {

  constructor(private evaService: EvaluatorService, private router: Router, private http: HttpClient) {
    this.evaFormGroup = this.formGroupCreator();
  }

  ngOnInit() {
  }

  evaFormGroup: FormGroup;

  formGroupCreator(): FormGroup {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      secondName: new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
      firstSurname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      secondSurname: new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
      country: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      membership: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      cellPhone: new FormControl('', [Validators.minLength(10), Validators.maxLength(10)]),
      speciality: new FormControl('', [Validators.minLength(5)]),
      state: new FormControl('Answer pending', [Validators.required])
    });
  }

  get firstName() {
    return this.evaFormGroup.get('firstName');
  }
  get firstSurname() {
    return this.evaFormGroup.get('firstSurname');
  }
  get country() {
    return this.evaFormGroup.get('country');
  }
  get email() {
    return this.evaFormGroup.get('email');
  }
  get membership() {
    return this.evaFormGroup.get('membership');
  }
  get education() {
    return this.evaFormGroup.get('education');
  }
  get secondName() {
    return this.evaFormGroup.get('secondName');
  }
  get secondSurname() {
    return this.evaFormGroup.get('secondSurname');
  }
  get speciality(){
    return this.evaFormGroup.get('speciality');
  }
  get cellPhone(){
    return this.evaFormGroup.get('cellPhone');
  }
  get state(){
    return this.evaFormGroup.get('state')
  }
  


  saveNewEditor(): void {
    if (this.evaFormGroup.valid) {
      let evalua = this.buildEditorData();
      this.evaService.saveNewEvaluator(evalua).subscribe(item => {
        alert("The editor has been created successfully!");
        this.router.navigate(["/admin/evaluator/list"]);
      })
      console.log("saved");
    } else {
      console.log("invalid form")
    }
  }

  buildEditorData(): EvaluatorModel {
    let evaluator: EvaluatorModel = {
      id: null,
      firstName: this.firstName.value,
      secondName: this.secondName.value,
      firstSurname: this.firstSurname.value,
      secondSurname: this.secondSurname.value,
      country: this.country.value,
      cellPhone: this.cellPhone.value,
      email: this.email.value,
      membership: this.membership.value,
      education: this.education.value,
      speciality: this.speciality.value,
      state: 1
    }
    return evaluator;
  }

}
