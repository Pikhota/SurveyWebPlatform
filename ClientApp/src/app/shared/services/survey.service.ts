import { Injectable, QueryList } from '@angular/core';
import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  survey: Survey;
  surveys: QueryList<Survey>;
  constructor() { }
}
