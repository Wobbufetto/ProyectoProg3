import { Component, OnInit } from '@angular/core';
import { EvaluatorService } from 'src/app/services/evaluator.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EvaluatorModel } from 'src/app/models/Evaluator.model';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleModel } from 'src/app/models/articule.model';

@Component({
  selector: 'app-evaluator-home',
  templateUrl: './evaluator-home.component.html',
  styleUrls: ['./evaluator-home.component.css']
})
export class EvaluatorHomeComponent implements OnInit {

  constructor(private artService: ArticleService, private evaService: EvaluatorService, private router: Router, private route: ActivatedRoute) { }
  showConfirmationButtons: boolean = false;

  evalList: EvaluatorModel[] = [];
  articleList: ArticleModel[] = []

  idToShowButtons: string = '';
  ngOnInit() {
    this.getAllArticles();
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

  searchArticle(): void {
    let name = this.route.snapshot.params["authorName"];
    this.artService.getArticleByAuthor(name).subscribe(item => {
      this.articleList = item;
      //console.log(this.articleList)
    });
  }

  ChangeConfirmationButtons(id) {
    this.idToShowButtons = id;
    this.showConfirmationButtons = !this.showConfirmationButtons;
  }

}
