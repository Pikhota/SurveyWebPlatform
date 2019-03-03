import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SurveyService } from './shared/services/survey.service';
import { SurveyComponent } from './survey/survey.component';
import { SurveyDetailComponent } from './survey/survey-detail/survey-detail.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyDetailComponent,
    SurveyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
