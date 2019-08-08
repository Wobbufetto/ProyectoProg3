import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/articule.model';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { AuthorModel } from 'src/app/models/author.model';

@Component({
  selector: 'app-article-creator',
  templateUrl: './article-creator.component.html',
  styleUrls: ['./article-creator.component.css']
})
export class ArticleCreatorComponent implements OnInit {

  constructor(private artService: ArticleService, private router: Router) { }

  article: ArticleModel = {
    id: null,
    code: null,
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

  ngOnInit() {
  }

  saveNewArticle(): void {
    this.artService.saveNewArticle(this.article).subscribe(item => {
      alert("The article has been stored sucessfully");
      this.router.navigate(["articles/home"]);
    });
  }

}
