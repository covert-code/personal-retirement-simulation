import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey.form.component.html',
  styleUrls: ['./survey.form.component.css']
})
export class SurveyFormComponent {

  constructor(
    private router: Router,
  ) {
  }

  retirementSurveyForm = new FormGroup({
    retirementAge: new FormControl(),
    socialSecurityBenefit: new FormControl(),
    retirementLifetimeConcern: new FormControl(),
    retirementGoal: new FormControl(),
    currentSavings: new FormControl(),
    employerDeposit: new FormControl()
  });

  onFormSubmitClick(): void { }
}
