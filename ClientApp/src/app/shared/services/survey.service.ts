import { Injectable, EventEmitter } from '@angular/core';
import { Survey } from '../models/survey';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  readonly serverUrlSSL = 'https://localhost:44318/api';
  readonly surveyController = 'survey';

  surveyAdded = new EventEmitter<Survey>();
  surveyDeleted = new EventEmitter<number>();
  surveyOut: Survey;

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.serverUrlSSL}/${this.surveyController}`);
  }

  getSurvey(id: number) {
    return this.http.get(`${this.serverUrlSSL}/${this.surveyController}/${id}`);
  }

  postSurvey(survey: Survey) {
    return this.http.post(`${this.serverUrlSSL}/${this.surveyController}`, survey).subscribe(data => data = survey);
  }

  deleteSurvey(id: number) {
    return this.http.delete(`${this.serverUrlSSL}/${this.surveyController}/${id}`).subscribe(data => data = id);
  }

}
