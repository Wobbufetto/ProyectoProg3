import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditionModel } from '../models/edition.model';


const base_url: string = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  constructor(private http: HttpClient) { }

  getAllEditions():Observable<EditionModel[]>{
    return this.http.get<EditionModel[]>(`${base_url}editions`);
  }

  getEditionById(articleId: string): Observable<EditionModel>{
    return this.http.get<EditionModel>(`${base_url}editions/${articleId}`);
  }

  saveNewEdition(article: EditionModel): Observable<EditionModel>{
    return this.http.post<EditionModel>(`${base_url}editions`, article, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    })
  }

  getEditionActive(authorName: string):Observable<EditionModel[]>{
    return this.http.get<EditionModel[]>(`${base_url}editions/get-article-by-author?authorName=${authorName}`);
  }

  updateEdition(article: EditionModel): Observable<EditionModel>{
    return this.http.put<EditionModel>(`${base_url}editions`, article, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  deleteEdition(articleId: String): Observable<EditionModel>{
    return this.http.delete<EditionModel>(`${base_url}editions/${articleId}`);
  }
}
