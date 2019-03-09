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

  constructor(private dialog: MatDialog, protected service: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.initData();
  }

  initData() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.service.typeOf = TypeEnum.surveyType;
    this.service.getItem(id);
    this.refreshQuestionList();
  }

  refreshQuestionList() {
    this.service.getQuestionsFromSurvey(this.service.survey.Id);
  }

  createQuestion() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    dialogConfig.data = { id: this.service.survey.Id };
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
