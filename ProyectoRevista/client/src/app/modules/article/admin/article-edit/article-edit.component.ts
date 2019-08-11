import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleModel } from 'src/app/models/articule.model';
import { AuthorModel } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  constructor(private autService: AuthorService, private artService: ArticleService, private route: ActivatedRoute, private router: Router) { }

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
    this.searchArticle();
  }

  searchArticle(): void {
    let id = this.route.snapshot.params["id"];
    this.artService.getArticleById(id).subscribe(item => {
      this.article = item;
    });
  }

  updateArticle() {
    this.artService.updateArticle(this.article).subscribe(item => {
      alert("This article has been updated successfuly!");
      console.log(this.article.authorName);
      this.router.navigate(["/admin/author/list"])
    })
  }

}
