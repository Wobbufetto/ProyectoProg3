import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorModel } from '../models/author.model';
import { UserService } from './user.service';

const base_url: string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient, private userService: UserService) { 
    this.token = this.userService.getToken();
  }
  token :string;
  
  getAllAuthors():Observable<AuthorModel[]>{
    return this.http.get<AuthorModel[]>(`${base_url}Authors?access_token=${this.token}`);
  }

  getAuthorById(authorId: string): Observable<AuthorModel>{
    return this.http.get<AuthorModel>(`${base_url}Authors?access_token=${this.token}/${authorId}`);
  }

  saveNewAuthor(author: AuthorModel): Observable<AuthorModel>{
    return this.http.post<AuthorModel>(`${base_url}Authors?access_token=${this.token}`, author, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    })
  }

  updateAuthor(author: AuthorModel): Observable<AuthorModel>{
    return this.http.put<AuthorModel>(`${base_url}Authors?access_token=${this.token}`, author, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  deleteAuthor(authorId: String): Observable<AuthorModel>{
    return this.http.delete<AuthorModel>(`${base_url}Authors?access_token=${this.token}/${authorId}`);
  }
  
}