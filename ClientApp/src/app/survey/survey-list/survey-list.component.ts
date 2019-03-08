import { Survey } from './../../shared/models/survey';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  constructor(private dialog: MatDialog, protected service: ApiService, private route: Router) {}

  surveys: Survey[];

  ngOnInit() {
    this.service.typeOf = TypeEnum.surveyType;
    this.refreshList();
  }

  createSurvey() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    const dialogRef = this.dialog.open(SurveyAddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => this.refreshList());
  }

  refreshList() {
    this.service.typeOf = TypeEnum.surveyType;
    this.service.getItems<Survey>().subscribe( data => this.surveys = data );
  }

  onDelete(survey: Survey) {
    this.service.typeOf = TypeEnum.surveyType;
    this.service.deleteItem(survey.Id).add(() => this.refreshList());
  }

  toSurvey(id: number) {
    this.route.navigate(['/survey', id]);
  }
}
