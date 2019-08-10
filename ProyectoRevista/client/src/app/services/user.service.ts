import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = 'http://localhost:3000/api/';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  tokenId: string = '';


  loginUser(email: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${base_url}Users/login?include=user`, {
      email,
      password
    },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      });
  }

  saveToken(token){
    localStorage.setItem("userTK", token);
  }

  getToken(token){
    return localStorage.getItem("userTk");
  }

  saveUserInformation(user: UserModel): void{
    localStorage.setItem("userInfo", JSON.stringify(user));
  }

  getUserInformation(){
    return (JSON.stringify(localStorage.getItem("userInfo")));
  }
}
