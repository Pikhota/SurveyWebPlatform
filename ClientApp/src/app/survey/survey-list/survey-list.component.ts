import { Survey } from './../../shared/models/survey';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SurveyAddComponent } from '../survey-add/survey-add.component';
import { SurveyService } from '../../shared/services/survey.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styles: []
})
export class SurveyListComponent implements OnInit {

  constructor(private dialog: MatDialog, private service: SurveyService, private route: Router) {
    this.service.surveyAdded.subscribe((survey: Survey) => { this.refreshList(), console.log(`Survey ${survey} added!`); });
    this.service.surveyDeleted.subscribe((id: number) => { this.refreshList(), console.log(`Survey with id=${id} deleted!`); });
  }

  surveys: Survey[];

  ngOnInit() {
    this.refreshList();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this.dialog.open(SurveyAddComponent, dialogConfig);
  }

  refreshList() {
    this.service.getSurveys().subscribe( data => this.surveys = data );
  }

  onDelete(survey: Survey) {
    this.service.deleteSurvey(survey.SurveyId);
    this.service.surveyDeleted.emit(survey.SurveyId);
  }

  toSurvey(id: number) {
    this.service.surveyOut = this.surveys.find(data => data.SurveyId === id);
    this.route.navigate(['/survey', id]);

  }
}
