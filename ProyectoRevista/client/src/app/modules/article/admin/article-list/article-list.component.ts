import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleModel } from 'src/app/models/articule.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private artService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  showConfirmationButtons: boolean = false;

  articleList: ArticleModel[] = [];

  idToShowButtons: string = '';
  ngOnInit() {
    this.searchAuthor();
    this.searchEdition();
  }

  objectKeys(objeto: any) {
    const keys = Object.values(objeto);
    console.log(keys)
    return keys;

  }

  getAllArticles(): void {
    this.artService.getAllArticles().subscribe(items => {
      this.articleList = items;
    })
  }

  searchAuthor(): void {
    let name = this.route.snapshot.params["authorName"];
    this.artService.getArticleByAuthor(name).subscribe(item => {
      this.articleList = item;
      //console.log(this.articleList)
    });
  }

  searchEdition(): void{
    let numEd = this.route.snapshot.params["numEdition"];
    this.artService.getArticleByEdition(numEd).subscribe(item =>{
      this.articleList = item;
    })
  }


  ChangeConfirmationButtons(id) {
    this.idToShowButtons = id;
    this.showConfirmationButtons = !this.showConfirmationButtons;
  }

  deleteArticle(articleId: string): void {
    this.artService.deleteArticle(articleId).subscribe(item => {
      console.log(item);
      this.router.navigate(["/admin/author/list"])
    })
  }
}

