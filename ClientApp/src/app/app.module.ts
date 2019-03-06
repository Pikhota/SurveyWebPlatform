import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyAddComponent } from './survey/survey-add/survey-add.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing/app-routing.module';
import { QuestionComponent } from './question/question/question.component';
import { ApiService } from './shared/services/api-service.service';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    SurveyComponent,
    SurveyAddComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [SurveyAddComponent, QuestionComponent]
})
export class AppModule { }
