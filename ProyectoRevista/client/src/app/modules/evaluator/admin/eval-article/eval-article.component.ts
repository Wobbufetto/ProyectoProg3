import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleModel } from 'src/app/models/articule.model';

@Component({
  selector: 'app-eval-article',
  templateUrl: './eval-article.component.html',
  styleUrls: ['./eval-article.component.css']
})
export class EvalArticleComponent implements OnInit {

  constructor(private artService: ArticleService, private route: ActivatedRoute, private router: Router) { }

  article: ArticleModel = {
    id: null,
    title: null,
    abstract: null,
    keywords: null,
    image: null,
    authorName: null,
    authorSurname: null,
    state: null,
    date: null,
    articlePDf: null,
    authorAfil: null,
    authorEmail: null,
    numEdition: null,
    score: null
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
