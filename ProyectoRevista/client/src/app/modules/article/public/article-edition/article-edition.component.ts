import { Component, OnInit } from '@angular/core';
import { EditionService } from 'src/app/services/edition.service';
import { EditionModel } from 'src/app/models/edition.model';

@Component({
  selector: 'app-article-edition',
  templateUrl: './article-edition.component.html',
  styleUrls: ['./article-edition.component.css']
})
export class ArticleEditionComponent implements OnInit {

  constructor(private edtService: EditionService) { }

  editionList : EditionModel[]=[];
  
  ngOnInit() {
    this.getAllEditions();
  }

  getAllEditions() : void{
    this.edtService.getAllEditions().subscribe(items =>{
      this.editionList = items;
    })
  }

}
