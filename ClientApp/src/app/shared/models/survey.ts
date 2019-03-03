import { Question } from './question';
import { QueryList } from '@angular/core';

export class Survey {
  id: number;
  title: string;
  createdBy: string;
  creationgDate: string;
  questions: QueryList<Question>;
}
