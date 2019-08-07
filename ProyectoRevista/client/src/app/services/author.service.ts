import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorModel } from '../models/author.model';

const base_url: string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAllAuthors():Observable<AuthorModel[]>{
    return this.http.get<AuthorModel[]>(`${base_url}Authors`);
  }

  getAuthorById(authorId: string): Observable<AuthorModel>{
    return this.http.get<AuthorModel>(`${base_url}Authors/${authorId}`);
  }

  saveNewAuthor(author: AuthorModel): Observable<AuthorModel>{
    return this.http.post<AuthorModel>(`${base_url}Authors`, author, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    })
  }

  updateAuthor(author: AuthorModel): Observable<AuthorModel>{
    return this.http.put<AuthorModel>(`${base_url}Authors`, author, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  deleteAuthor(authorId: String): Observable<AuthorModel>{
    return this.http.delete<AuthorModel>(`${base_url}Authors/${authorId}`);
  }
  
}