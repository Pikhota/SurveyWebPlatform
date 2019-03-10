import { Question } from './../models/question';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/survey';
import { TypeEnum } from '../type-enum';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  readonly serverUrlSSL = 'https://localhost:44318/api';
  readonly surveyController = 'survey';
  readonly questionController = 'question';
  typeOf: TypeEnum;
  surveys: Survey[];
  surveyQuestionList: Question[];
  survey: Survey;
  questions: Question[];
  question: Question;

  getItems() {
    switch (this.typeOf) {
      case TypeEnum.surveyType:
        this.http.get(`${this.serverUrlSSL}/${this.surveyController}`).subscribe((surveyList: Survey[]) => this.surveys = surveyList);
        break;
      case TypeEnum.questionType:
        this.http.get(`${this.serverUrlSSL}/${this.questionController}`)
          .subscribe((questionList: Question[]) => this.questions = questionList);
        break;
      default:
        console.log('Cast error');
        break;
    }
  }

  getQuestionsFromSurvey(surveyId: number) {
    this.http.get(`${this.serverUrlSSL}/${this.questionController}/surveyquestions/${surveyId}`)
      .subscribe((questionList: Question[]) => this.surveyQuestionList = questionList);
  }

  getItem(id: number) {
    switch (this.typeOf) {
      case TypeEnum.surveyType:
        this.http.get(`${this.serverUrlSSL}/${this.surveyController}/${id}`).subscribe((item: Survey) => this.survey = item);
        break;
      case TypeEnum.questionType:
        this.http.get(`${this.serverUrlSSL}/${this.questionController}/${id}`).subscribe((item: Question) => this.question = item);
        break;
      default:
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
      default:
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
      default:
        console.log('Cast error');
        break;
    }
  }

  putItem<T>(id: number, item: T) {
    switch (this.typeOf) {
      case TypeEnum.questionType:
        this.http.put(`${this.serverUrlSSL}/${this.questionController}/${id}`, item);
        break;
    }
  }
}
