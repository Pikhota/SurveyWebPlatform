import { Survey } from './../../shared/models/survey';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api-service.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { QuestionComponent } from '../../question/question/question.component';
import { TypeEnum } from '../../shared/type-enum';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styles: []
})
export class SurveyDetailComponent implements OnInit {

  constructor(public service: ApiService, private dialog: MatDialog, private route: ActivatedRoute) {
    this.surveyId = +this.route.snapshot.paramMap.get('id');
    this.service.typeOf = TypeEnum.surveyType;
    this.service.getItem(this.surveyId);
  }

  surveyId: number;

  ngOnInit() {
    this.service.getQuestionsFromSurvey(this.surveyId);
  }

  createQuestion() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.data = { id: this.surveyId };
    const dialogRef = this.dialog.open(QuestionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => this.service.getQuestionsFromSurvey(this.surveyId));
  }

  deleteQuestion(id: number) {
    this.service.typeOf = TypeEnum.questionType;
    this.service.deleteItem(id).add(() => this.service.getQuestionsFromSurvey(this.surveyId));
  }

  editQuestion(id: number) {

  }
}
