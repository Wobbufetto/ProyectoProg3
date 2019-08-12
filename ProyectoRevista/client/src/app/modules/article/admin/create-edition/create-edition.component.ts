import { Component, OnInit } from '@angular/core';
import { EditionService } from 'src/app/services/edition.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditionModel } from 'src/app/models/edition.model';

@Component({
  selector: 'app-create-edition',
  templateUrl: './create-edition.component.html',
  styleUrls: ['./create-edition.component.css']
})
export class CreateEditionComponent implements OnInit {

  constructor(private ediService: EditionService, private router: Router, private http: HttpClient) {
    this.editionFormGroup = this.formGroupCreator();
  }

  editionFormGroup: FormGroup;

  formGroupCreator(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      volEdition: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(20)]),
      dateLimit: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.editionFormGroup.get('name');
  }
  get volEdition() {
    return this.editionFormGroup.get('volEdition');
  }
  get description() {
    return this.editionFormGroup.get('description');
  }
  get dateLimit() {
    return this.editionFormGroup.get('dateLimit');
  }

  ngOnInit() {
  }


  saveNewEdition(): void {
    if (this.editionFormGroup.valid) {
      let edition = this.buildArticleData();
      this.ediService.saveNewEdition(edition).subscribe(item => {
        alert("The edition has been stored successfully!");
        this.router.navigate(["/edition/articles"])
      })
      console.log("saved");
    } else {
      console.log("invalid form")
    }
  }


  buildArticleData(): EditionModel {
    let edition: EditionModel = {
      id: null,
      name: this.name.value,
      volEdition: this.volEdition.value,
      description: this.description.value,
      dateLimit: this.dateLimit.value
    }
    return edition;
  }
}
