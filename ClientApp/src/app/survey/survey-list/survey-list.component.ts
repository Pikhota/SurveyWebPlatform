import { Survey } from './../../shared/models/survey';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SurveyAddComponent } from '../survey-add/survey-add.component';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/services/api-service.service';
import { TypeEnum } from '../../shared/type-enum';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styles: []
})
export class SurveyListComponent implements OnInit {

  constructor(private dialog: MatDialog, private service: ApiService, private route: Router) {
    this.service.surveyAdded.subscribe(() => { this.refreshList(); });
    this.service.surveyDeleted.subscribe(() => { this.refreshList(); });
  }

  surveys: Survey[];

  ngOnInit() {
    this.service.typeOn = TypeEnum.surveyType;
    this.refreshList();
  }

  createSurvey() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(SurveyAddComponent, dialogConfig);
  }

  refreshList() {
    this.service.typeOn = TypeEnum.surveyType;
    this.service.getItems<Survey>().subscribe( data => this.surveys = data );
  }

  onDelete(survey: Survey) {
    this.service.typeOn = TypeEnum.surveyType;
    this.service.deleteItem(survey.Id);
    this.service.surveyDeleted.emit(survey.Id);
  }

  toSurvey(id: number) {
    this.service.surveyOut = this.surveys.find(survey => survey.Id === id);
    this.route.navigate(['/survey', id]);
  }
}
