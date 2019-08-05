import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/articule.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-home',
  templateUrl: './article-home.component.html',
  styleUrls: ['./article-home.component.css']
})
export class ArticleHomeComponent implements OnInit {

  constructor(private artService: ArticleService) { }

  articleList : ArticleModel[] = [];

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles():void{
    this.artService.getAllArticles().subscribe(items => {
      this.articleList = items;
    })
  }

}
