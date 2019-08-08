import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ArticleModel } from 'src/app/models/articule.model';

@Component({
  selector: 'app-author-home',
  templateUrl: './author-home.component.html',
  styleUrls: ['./author-home.component.css']
})
export class AuthorHomeComponent implements OnInit {

  constructor(private autService: ArticleService, private route: Router) { }

  showConfirmationButtons: boolean= false;
  
  articleList: ArticleModel[] = [];

  idToShowButtons: string = '';
  ngOnInit() {
    this.getAllArticles()
  }

  getAllArticles(): void{
    this.autService.getAllArticles().subscribe(items => {
      this.articleList = items;
    })
  }

  ChangeConfirmationButtons(id){
    this.idToShowButtons = id;
    this.showConfirmationButtons = !this.showConfirmationButtons;
  }

  deleteArticle(articleId : string): void{
    this.autService.deleteArticle(articleId).subscribe(item =>{
      console.log(item);
      this.route.navigate(["/author/articles"])
    })
  }

}
