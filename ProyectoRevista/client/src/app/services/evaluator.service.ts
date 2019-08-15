import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvaluatorModel } from '../models/Evaluator.model';
import { EditorService } from './editor.service';
import { UserService } from './user.service';

const base_url: string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class EvaluatorService {

  constructor(private userService: UserService,private http: HttpClient) { 
    this.token = this.userService.getToken();
  }

  token :string;

  getAllEvaluators():Observable<EvaluatorModel[]>{
    return this.http.get<EvaluatorModel[]>(`${base_url}Evaluators`);
  }

  getEvaluatorById(evaluatorId: string): Observable<EvaluatorModel>{
    return this.http.get<EvaluatorModel>(`${base_url}Evaluators/${evaluatorId}`);
  }

  saveNewEvaluator(evaluator: EvaluatorModel): Observable<EvaluatorModel>{
    return this.http.post<EvaluatorModel>(`${base_url}Evaluators`, evaluator, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    })
  }

  sendEmail(message : string, subject : string, evalEmail : string):Observable<EvaluatorModel[]>{
    return this.http.get<EvaluatorModel[]>(`${base_url}Evaluators/sendEmail?message=${message}&subject=${subject}&emailAddresses=juanka970129%40gmail.com`);
  }

  updateEvaluator(evaluator: EvaluatorModel): Observable<EvaluatorModel>{
    return this.http.put<EvaluatorModel>(`${base_url}Evaluators`, evaluator, {
      headers: new HttpHeaders({
        "content-type":"application/json"
      })
    });
  }

  deleteEvaluator(evaluatorId: String): Observable<EvaluatorModel>{
    return this.http.delete<EvaluatorModel>(`${base_url}Evaluators/${evaluatorId}`);
  }

  
  
}