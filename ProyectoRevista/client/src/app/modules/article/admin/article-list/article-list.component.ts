import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleModel } from 'src/app/models/articule.model';
import { isNullOrUndefined } from 'util';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private artService: ArticleService, private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  showConfirmationButtons: boolean = false;

  articleList: ArticleModel[] = [];

  idToShowButtons: string = '';
  userLogged: boolean = false;
  completeName: string = '';
  dirEmail : string = '';
  numberRol: number = 0;
  rol: string = '';


  ngOnInit() {
    this.searchAuthor();
    this.searchEdition();
  }

  objectKeys(objeto: any) {
    const keys = Object.values(objeto);
    console.log(keys)
    return keys;
  }

  showMenu(): void {
    let userInfo = this.userService.getUserInformation();
    if (isNullOrUndefined(userInfo)) {
      this.userLogged = false;
    } else {
      this.userLogged = true;
      this.completeName = userInfo.realm;
      this.dirEmail = userInfo.email;
      this.numberRol = userInfo.rol;
    }
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

