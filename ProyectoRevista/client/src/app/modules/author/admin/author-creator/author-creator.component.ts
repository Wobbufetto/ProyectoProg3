import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorModel } from 'src/app/models/author.model';

@Component({
  selector: 'app-author-creator',
  templateUrl: './author-creator.component.html',
  styleUrls: ['./author-creator.component.css']
})
export class AuthorCreatorComponent implements OnInit {

  constructor(private autService: AuthorService, private router: Router, private http: HttpClient) {
    this.authorFormGroup = this.formGroupCreator();
   }

  ngOnInit() {
  }

  authorFormGroup: FormGroup;

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
      cellPhone: new FormControl('', [Validators.minLength(10),Validators.maxLength(10)])
    });
  }

  get firstName() {
    return this.authorFormGroup.get('firstName');
  }
  get firstSurname() {
    return this.authorFormGroup.get('firstSurname');
  }
  get country() {
    return this.authorFormGroup.get('country');
  }
  get email() {
    return this.authorFormGroup.get('email');
  }
  get membership() {
    return this.authorFormGroup.get('membership');
  }
  get education() {
    return this.authorFormGroup.get('education');
  }
  get secondName(){
    return this.authorFormGroup.get('secondName');
  }
  get secondSurname(){
    return this.authorFormGroup.get('secondSurname')
  }
  get cellPhone(){
    return this.authorFormGroup.get('cellPhone')
  }



  saveNewAuthor(): void {
    if (this.authorFormGroup.valid) {
      let author = this.buildEditorData();
      this.autService.saveNewAuthor(author).subscribe(item => {
        alert("The author has been created successfully!");
        this.router.navigate(["/admin/author/list"]);
      })
      console.log("saved");
    } else {
      console.log("invalid form")
    }
  }

  buildEditorData(): AuthorModel {
    let author: AuthorModel = {
      id: null,
      firstName: this.firstName.value,
      secondName: this.secondName.value,
      firstSurname: this.firstSurname.value,
      secondSurname: this.secondSurname.value,
      country: this.country.value,
      cellPhone: this.cellPhone.value,
      email: this.email.value,
      membership: this.membership.value,
      education: this.education.value
    }
    return author;
  }

}
