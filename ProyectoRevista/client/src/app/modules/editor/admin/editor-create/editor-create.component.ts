import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/services/editor.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EditorModel } from 'src/app/models/editor.model';

@Component({
  selector: 'app-editor-create',
  templateUrl: './editor-create.component.html',
  styleUrls: ['./editor-create.component.css']
})
export class EditorCreateComponent implements OnInit {

  constructor(private edtService: EditorService, private router: Router, private http: HttpClient) {
    this.editorFormGroup = this.formGroupCreator();
  }

  ngOnInit() {
  }

  editorFormGroup: FormGroup;

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
    return this.editorFormGroup.get('firstName');
  }
  get firstSurname() {
    return this.editorFormGroup.get('firstSurname');
  }
  get country() {
    return this.editorFormGroup.get('country');
  }
  get email() {
    return this.editorFormGroup.get('email');
  }
  get membership() {
    return this.editorFormGroup.get('membership');
  }
  get education() {
    return this.editorFormGroup.get('education');
  }
  get secondName(){
    return this.editorFormGroup.get('secondName');
  }
  get secondSurname(){
    return this.editorFormGroup.get('secondSurname')
  }



  saveNewEditor(): void {
    if (this.editorFormGroup.valid) {
      let editor = this.buildEditorData();
      this.edtService.saveNewEditor(editor).subscribe(item => {
        alert("The editor has been created successfully!");
        this.router.navigate(["/edition/articles"]);
      })
      console.log("saved");
    } else {
      console.log("invalid form")
    }
  }

  buildEditorData(): EditorModel {
    let editor: EditorModel = {
      id: null,
      firstName: this.firstName.value,
      secondName: this.secondName.value,
      firstSurname: this.firstSurname.value,
      secondSurname: this.secondSurname.value,
      country: this.country.value,
      cellPhone: null,
      email: this.email.value,
      membership: this.membership.value,
      education: this.education.value
    }
    return editor;
  }

}
