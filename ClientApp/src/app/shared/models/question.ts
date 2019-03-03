import { QueryList } from '@angular/core';
import { Variant } from './variant';
import { Survey } from './survey';

export class Question {
  id: number;
  text: string;
  comment?: string;
  surveyId?: number;
  survey?: Survey;
  variants: QueryList<Variant>;
}
