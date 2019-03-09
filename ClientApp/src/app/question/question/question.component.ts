import { Component, OnInit, inject, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api-service.service';
import { MatDialogRef } from '@angular/material';
import { TypeEnum } from '../../shared/type-enum';
import { Question } from '../../shared/models/question';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styles: []
})
export class QuestionComponent implements OnInit {

  constructor(private service: ApiService, public dialogRef: MatDialogRef<QuestionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}


  formData: FormGroup = new FormGroup({
    Id: new FormControl(0),
    Text: new FormControl('', Validators.required),
    Comment: new FormControl(''),
    SurveyId: new FormControl(null),
    Survey: new FormControl(null),
    Answer1: new FormControl('', Validators.required),
    Answer2: new FormControl('', Validators.required),
    Answer3: new FormControl('', Validators.required)
  });


  ngOnInit() {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.service.typeOf = TypeEnum.questionType;
      this.service.postItem<Question>(form.value);
      this.resetForm(form);
      this.dialogRef.close();
    }
  }

  onCancel(form: FormGroup) {
    this.resetForm(form);
    this.dialogRef.close();
  }

  resetForm(form?: FormGroup) {
    if (form != null) {
      form.reset();
      this.initializeFormGroup();
    }
  }

  initializeFormGroup() {
    this.formData.setValue({
      Id: 0,
      Text: '',
      Comment: '',
      SurveyId: null,
      Survey: null,
      Answer1: '',
      Answer2: '',
      Answer3: ''
    });
  }
}
