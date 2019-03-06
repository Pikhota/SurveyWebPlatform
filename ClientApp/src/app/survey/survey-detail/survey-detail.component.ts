import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../../shared/models/survey';
import { ApiService } from '../../shared/services/api-service.service';
import { Question } from '../../shared/models/question';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { QuestionComponent } from '../../question/question/question.component';
import { TypeEnum } from '../../shared/type-enum';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styles: []
})
export class SurveyDetailComponent implements OnInit {

  constructor(private dialog: MatDialog, private service: ApiService) {
    this.service.questionAdded.subscribe((question: Question) => { this.initData(), console.log(`Question ${question} added!`); });
    this.service.questionDeleted.subscribe((id: number) => { this.initData(), console.log(`Question ${id} added!`); });
  }

  survey: Survey;
  questions: Question[];

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.survey = this.service.surveyOut;
  }

  refreshQuestionList() {
    this.service.typeOn = TypeEnum.questionType;
    this.service.getItems<Question>().subscribe( data => this.questions = data );
  }

  createQuestion() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(QuestionComponent, dialogConfig);
  }
}
