import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleModel } from '../models/articule.model';

const base_url: string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getAllArticles():Observable<ArticleModel[]>{
    return this.http.get<ArticleModel[]>(`${base_url}Articles`);
  }

  getArticleById(articleId: string): Observable<ArticleModel>{
    return this.http.get<ArticleModel>(`${base_url}Articles/${articleId}`);
  }

  saveNewArticle(article: ArticleModel): Observable<ArticleModel>{
    return this.http.post<ArticleModel>(`${base_url}Articles`, article, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    })
  }

  getArticleByAuthor(authorName: string):Observable<ArticleModel[]>{
    return this.http.get<ArticleModel[]>(`${base_url}Articles/get-article-by-author?authorName=${authorName}`);
  }

  updateArticle(article: ArticleModel): Observable<ArticleModel>{
    return this.http.put<ArticleModel>(`${base_url}Articles`, article, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  
  deleteArticle(articleId: String): Observable<ArticleModel>{
    return this.http.delete<ArticleModel>(`${base_url}Articles/${articleId}`);
  }
  
}
