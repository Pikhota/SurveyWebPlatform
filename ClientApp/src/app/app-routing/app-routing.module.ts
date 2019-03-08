import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyDetailComponent } from '../survey/survey-detail/survey-detail.component';
import { SurveyListComponent } from '../survey/survey-list/survey-list.component';
import { SurveyComponent } from '../survey/survey.component';

const routes: Routes = [
  { path: '', component: SurveyComponent },
  { path: 'survey/:id', component: SurveyDetailComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [SurveyListComponent, SurveyDetailComponent];
