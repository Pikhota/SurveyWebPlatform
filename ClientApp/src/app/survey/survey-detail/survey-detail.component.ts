import { Component, OnInit } from '@angular/core';
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

  constructor(private dialog: MatDialog, private service: ApiService) {}

  survey: Survey;
  questions: Question[];

  ngOnInit() {
    this.initData();
    this.refreshQuestionList();
  }

  initData() {
    this.survey = this.service.surveyOut;
  }

  refreshQuestionList() {
    this.service.typeOf = TypeEnum.questionType;
    this.service.getQuestionsFromSurvey(this.survey.Id).subscribe(data => this.questions = data);
  }

  createQuestion() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    const dialogRef = this.dialog.open(QuestionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => this.refreshQuestionList());
  }

  deleteQuestion(id: number) {
    this.service.typeOf = TypeEnum.questionType;
    this.service.deleteItem(id).add(() => this.refreshQuestionList());
  }

  editQuestion(id: number) {

  }
}
