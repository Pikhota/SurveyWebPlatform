import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey';
import { Question } from '../models/question';
import { TypeEnum } from '../type-enum';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  readonly serverUrlSSL = 'https://localhost:44318/api';
  readonly surveyController = 'survey';
  readonly questionController = 'question';

  surveyOut: Survey;
  typeOf: TypeEnum;

  getItems<T>(): Observable<T[]> {
    switch (this.typeOf) {
      case TypeEnum.surveyType:
        return this.http.get<T[]>(`${this.serverUrlSSL}/${this.surveyController}`);
      case TypeEnum.questionType:
        return this.http.get<T[]>(`${this.serverUrlSSL}/${this.questionController}`);
      case TypeEnum.unknown:
        console.log('Cast error');
        break;
    }
  }

  getQuestionsFromSurvey(surveyId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.serverUrlSSL}/${this.questionController}/surveyquestions/${surveyId}`);
  }

  getItem<T>(id: number) {
    switch (this.typeOf) {
      case TypeEnum.surveyType:
        return this.http.get<T>(`${this.serverUrlSSL}/${this.surveyController}/${id}`);
      case TypeEnum.questionType:
        return this.http.get<T>(`${this.serverUrlSSL}/${this.questionController}/${id}`);
      case TypeEnum.unknown:
        console.log('Cast error');
        break;
    }
  }

  postItem<T extends object>(item: T) {
    switch (this.typeOf) {
      case TypeEnum.surveyType:
        this.http.post<Survey>(`${this.serverUrlSSL}/${this.surveyController}`, item).subscribe(data => data = item as Survey);
        break;
      case TypeEnum.questionType:
        this.http.post<Question>(`${this.serverUrlSSL}/${this.questionController}`, item).subscribe(data => data = item as Question);
        break;
      case TypeEnum.unknown:
        console.log('Cast error');
        break;
    }
  }

  deleteItem(id: number) {
    switch (this.typeOf) {
      case TypeEnum.surveyType:
        return this.http.delete<number>(`${this.serverUrlSSL}/${this.surveyController}/${id}`).subscribe(data => data = id);
      case TypeEnum.questionType:
        return this.http.delete<number>(`${this.serverUrlSSL}/${this.questionController}/${id}`).subscribe(data => data = id);
      case TypeEnum.unknown:
        console.log('Cast error');
        break;
    }
  }
}
