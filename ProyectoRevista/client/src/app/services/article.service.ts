import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  
}
