import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditorModel } from '../models/editor.model';
import { UserService } from './user.service';

const base_url: string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http: HttpClient, private userService: UserService) { 
    this.token = this.userService.getToken();
  }

  token : string;
  getAllEditors():Observable<EditorModel[]>{
    return this.http.get<EditorModel[]>(`${base_url}Editors?access_token=${this.token}`);
  }

  getEditorById(editorId: string): Observable<EditorModel>{
    return this.http.get<EditorModel>(`${base_url}Editors?access_token=${this.token}/${editorId}`);
  }

  saveNewEditor(author: EditorModel): Observable<EditorModel>{
    return this.http.post<EditorModel>(`${base_url}Editors?access_token=${this.token}`, author, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    })
  }

  updateEditor(author: EditorModel): Observable<EditorModel>{
    return this.http.put<EditorModel>(`${base_url}Editors?access_token=${this.token}`, author, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  deleteEditor(editorId: String): Observable<EditorModel>{
    return this.http.delete<EditorModel>(`${base_url}Editors?access_token=${this.token}/${editorId}`);
  }
  
}