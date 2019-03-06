import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';;
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api-service.service';
import { Survey } from '../../shared/models/survey';
import { TypeEnum } from '../../shared/type-enum';

@Component({
  selector: 'app-survey-add',
  templateUrl: './survey-add.component.html',
  styles: []
})
export class SurveyAddComponent implements OnInit {

  constructor(protected service: ApiService, public dialogRef: MatDialogRef<SurveyAddComponent>) {}

  formData: FormGroup = new FormGroup({
    Id: new FormControl(0),
    Questions: new FormControl(null),
    Title: new FormControl('', Validators.required),
    InfoText: new FormControl('', Validators.required),
    CreatedBy: new FormControl('Current User', Validators.required),
    CreationDate: new FormControl(new Date().toDateString()),
  });

  ngOnInit() {}

  initializeFormGroup() {
    this.formData.setValue({
      Id: 0,
      Questions: null,
      Title: '',
      InfoText: '',
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

  onCreateSurvey(form: FormGroup) {
    if (form.valid) {
      this.service.typeOn = TypeEnum.surveyType;
      this.service.postItem<Survey>(form.value);
      this.service.surveyAdded.emit();
      this.resetForm(form);
      this.dialogRef.close();
    }
  }

  onCancel(form: FormGroup) {
    this.resetForm(form);
    this.dialogRef.close();
  }
}
