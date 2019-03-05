import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SurveyService } from '../../shared/services/survey.service';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-add',
  templateUrl: './survey-add.component.html',
  styles: []
})
export class SurveyAddComponent implements OnInit {

  constructor(protected service: SurveyService, public dialogRef: MatDialogRef<SurveyAddComponent>) { }

  formData: FormGroup = new FormGroup({
    SurveyId: new FormControl(0),
    Questions: new FormControl(null),
    SurveyTitle: new FormControl('', Validators.required),
    CreatedBy: new FormControl('Current User', Validators.required),
    CreationDate: new FormControl(new Date().toDateString()),
  });

  ngOnInit() {}

  initializeFormGroup() {
    this.formData.setValue({
      SurveyId: 0,
      Questions: null,
      SurveyTitle: '',
      CreatedBy: 'Current User',
      CreationDate: new Date().toDateString()
    });
  }

  resetForm(form?: FormGroup) {
    if (form != null) {
      form.reset();
      this.initializeFormGroup();
    }
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.service.postSurvey(form.value);
      this.service.surveyAdded.emit(form.value);
      this.resetForm(form);
      this.dialogRef.close();
    }
  }

  onCancel(form: FormGroup) {
    this.resetForm(form);
    this.dialogRef.close();
  }
}
