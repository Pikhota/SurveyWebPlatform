import { Question } from './question';

export class Variant {
  id: number;
  text: string;
  voteAmount?: number;
  questionId?: number;
  question?: Question;
}
