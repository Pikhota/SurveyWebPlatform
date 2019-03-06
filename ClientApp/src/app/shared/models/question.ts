import { Survey } from './survey';

export interface Question {
  Id: number;
  Text: string;
  Comment: string;
  SurveyId?: number;
  Survey: Survey;
  Answer1: string;
  Answer2: string;
  Answer3: string;
}
