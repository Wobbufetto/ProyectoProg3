import { Component, OnInit } from '@angular/core';
import { EditionService } from 'src/app/services/edition.service';
import { EditionModel } from 'src/app/models/edition.model';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleModel } from 'src/app/models/articule.model';

@Component({
  selector: 'app-article-edition',
  templateUrl: './article-edition.component.html',
  styleUrls: ['./article-edition.component.css']
})
export class ArticleEditionComponent implements OnInit {

  constructor(private edtService: EditionService, private artService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  editionList : EditionModel[]=[];
  articleList: ArticleModel[]=[];
  
  ngOnInit() {
    this.getAllEditions();
  }

  getAllEditions() : void{
    this.edtService.getAllEditions().subscribe(items =>{
      this.editionList = items;
    })
  }

  searchByEdition(): void{
    let numEd = this.route.snapshot.params["numEdition"];
    this.artService.getArticleByEdition(numEd).subscribe(item =>{
      this.articleList = item;
    })
  }

}
