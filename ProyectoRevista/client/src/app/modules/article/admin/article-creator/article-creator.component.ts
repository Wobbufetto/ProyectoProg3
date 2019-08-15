import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/articule.model';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-creator',
  templateUrl: './article-creator.component.html',
  styleUrls: ['./article-creator.component.css']
})
export class ArticleCreatorComponent implements OnInit {

  constructor(private artService: ArticleService, private router: Router, private http: HttpClient) {
    this.articleFormGroup = this.formGroupCreator();
  }

  articleFormGroup: FormGroup;

  formGroupCreator(): FormGroup {
    return new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      abstract: new FormControl('', [Validators.required, Validators.minLength(20)]),
      keywords: new FormControl('', [Validators.required, Validators.minLength(5)]),
      authorName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      authorSurname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      authorEmail: new FormControl('', [Validators.required]),
      authorAfil: new FormControl('', [Validators.required]),
      numEdition: new FormControl('', [Validators.required]),
      articlePDF: new FormControl(''),
      state: new FormControl(''),
      score: new FormControl(''),
      date: new FormControl('')

    });
  }

  get title() {
    return this.articleFormGroup.get('title');
  }
  get abstract() {
    return this.articleFormGroup.get('abstract');
  }
  get keywords() {
    return this.articleFormGroup.get('keywords');
  }
  get authorName() {
    return this.articleFormGroup.get('authorName');
  }
  get authorSurname() {
    return this.articleFormGroup.get('authorSurname');
  }
  get authorEmail(){
    return this.articleFormGroup.get('authorEmail');
  }
  get authorAfil(){
    return this.articleFormGroup.get('authorAfil');
  }
  get numEdition(){
    return this.articleFormGroup.get('numEdition');
  }
  get articlePDF(){
    return this.articleFormGroup.get('articlePDF');
  }
  get state(){
    return this.articleFormGroup.get('state');
  }
  get score(){
    return this.articleFormGroup.get('score');
  }
  get date(){
    return this.articleFormGroup.get('date');
  }


  uploadedFiles: Array<File>;

  ngOnInit() {
  }

  saveNewArticle(): void {
    if (this.articleFormGroup.valid) {
      let article = this.buildArticleData();
      this.artService.saveNewArticle(article).subscribe(item => {
        alert("The article has been stored successfully!");
        this.router.navigate(["/articles/home"])
      })
      console.log("saved");
    } else {
      console.log("invalid form")
    }
  }

  upload() {
    let formData = new FormData();
    formData.append("uploads[]", this.uploadedFiles[0], this.uploadedFiles[0].name);
    this.http.post('/api/containers/documents/upload', formData).subscribe((response) => {
      console.log('PDF receiveed is', response);
    })
  }

  buildArticleData(): ArticleModel {
    let article: ArticleModel = {
      id: null,
      title: this.title.value,
      abstract: this.abstract.value,
      keywords: this.keywords.value,
      authorName: this.authorName.value,
      authorSurname: this.authorSurname.value,
      authorEmail: this.authorEmail.value,
      authorAfil: this.authorAfil.value,
      articlePDF: this.articlePDF.value,
      state: this.state.value,
      date: this.date.value,
      numEdition: this.numEdition.value,
      score: this.score.value
    }
    return article;
  }

}
