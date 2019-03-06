import { Question } from './question';

export interface Survey {
  Id: number;
  Title: string;
  CreatedBy: string;
  CreationDate: string;
  InfoText: string;
  Questions: Question[];
}
