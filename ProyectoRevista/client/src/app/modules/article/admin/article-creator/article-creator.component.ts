import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/articule.model';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { AuthorModel } from 'src/app/models/author.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
      articlePDf: new FormControl('', [Validators.required]),
      authorName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      authorSurname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
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
  get articlePDF() {
    return this.articleFormGroup.get('articlePDf');
  }
  get authorName() {
    return this.articleFormGroup.get('authorName');
  }
  get authorSurname() {
    return this.articleFormGroup.get('authorSurname');
  }

  uploadedFiles: Array<File>;
  /*
  article: ArticleModel = {
    id: null,
    title: null,
    abstract: null,
    keywords: null,
    image: null,
    authorName: null,
    authorSurname: null,
    state: null,
    date: null
  }

  author: AuthorModel = {
    id: null,
    firstName: null,
    secondName: null,
    firstSurname: null,
    secondSurname: null,
    country: null,
    cellPhone: null,
    email: null,
    membership: null,
    education: null
  }
  */
  ngOnInit() {
  }

  saveNewArticle(): void {
    if (this.articleFormGroup.valid) {
      let article = this.buildArticleData();
      this.artService.saveNewArticle(article).subscribe(item =>{
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
    this.http.post('/api/containers/images/upload', formData).subscribe((response) => {
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
      articlePDf: this.articlePDF.value,
      state: null,
      date: null,
      image: null
    }
    return article;
  }

}
