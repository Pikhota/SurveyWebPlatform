import { Component, OnInit, Input } from '@angular/core';
import { Survey } from '../../shared/models/survey';
import { SurveyService } from '../../shared/services/survey.service';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styles: []
})
export class SurveyDetailComponent implements OnInit {

  constructor(private service: SurveyService) {
    this.survey = this.service.surveyOut;
  }

  survey: Survey;

  ngOnInit() {
    this.survey = this.service.surveyOut;
    console.log(this.service.surveyOut);
  }

}
