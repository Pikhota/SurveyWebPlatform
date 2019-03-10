import { Question } from './../../shared/models/question';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api-service.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { QuestionComponent } from '../../question/question/question.component';
import { TypeEnum } from '../../shared/type-enum';
import { NavigationService } from 'src/app/shared/services/navigation.service';


@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styles: []
})

export class SurveyDetailComponent implements OnInit {

  constructor(protected service: ApiService,protected navigateService: NavigationService,
              private dialog: MatDialog, private activeRoute: ActivatedRoute, private route: Router) {
    this.surveyId = +this.activeRoute.snapshot.paramMap.get('id');
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

  backToMainPage() {
    this.route.navigate(['/']);
  }

  deleteQuestion(id: number) {
    this.service.typeOf = TypeEnum.questionType;
    this.service.deleteItem(id).add(() => this.service.getQuestionsFromSurvey(this.surveyId));
  }

  editQuestion(id: number, question: Question) {
    this.service.typeOf = TypeEnum.questionType;
    this.service.putItem<Question>(id, question);
  }
}
