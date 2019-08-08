import { Component, OnInit } from '@angular/core';
import { AuthorModel } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  constructor(private autService: AuthorService) { }

  authorList : AuthorModel[] = [];

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors():void{
    this.autService.getAllAuthors().subscribe(items => {
      this.authorList = items;
    })
  }

}
