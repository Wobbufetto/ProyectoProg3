import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvaluatorModel } from '../models/Evaluator.model';

const base_url: string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class EvaluatorService {

  constructor(private http: HttpClient) { }

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