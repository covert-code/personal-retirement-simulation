import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { IParticipantSurvey } from 'src/app/models/IParticipantSurvey';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey.form.component.html',
  styleUrls: ['./survey.form.component.css']
})
export class SurveyFormComponent {

  surveyData: IParticipantSurvey;

  constructor(
    private router: Router,
    private signupService: SignupService
  ) {
    this.surveyData = {
      participant_ret_age: null,
      participant_ret_goal: null,
      participant_ret_curr_savings: null,
      participant_ret_employer_deposit: null,
      participant_ret_lifetime_concern: null,
      participant_ret_ss: null
    }
  }

  retirementSurveyForm = new FormGroup({
    retirementAge: new FormControl(),
    socialSecurityBenefit: new FormControl(),
    retirementLifetimeConcern: new FormControl(),
    retirementGoal: new FormControl(),
    currentSavings: new FormControl(),
    employerDeposit: new FormControl()
  });

  // Main function when submit button is pushed
  onFormSubmitClick(): void {
    if (this.validateFormContents()) {
      this.commitFormContents();
      if (this.submitFormContents()) {
        this.navigateNext();
      }
    }  
  }

  validateFormContents(): boolean {
    return true; // todo
  }

  commitFormContents(): void {
    this.surveyData.participant_ret_age = this.retirementSurveyForm.get('retirementAge').value;
    this.surveyData.participant_ret_goal = this.retirementSurveyForm.get('retirementGoal').value;
    this.surveyData.participant_ret_curr_savings = this.retirementSurveyForm.get('currentSavings').value;
    this.surveyData.participant_ret_employer_deposit = this.retirementSurveyForm.get('employerDeposit').value;
    this.surveyData.participant_ret_lifetime_concern = this.retirementSurveyForm.get('retirementLifetimeConcern').value;
    this.surveyData.participant_ret_ss = this.retirementSurveyForm.get('socialSecurityBenefit').value;
  }

  submitFormContents() : boolean {
    this.signupService.postParticipantSurveyData(this.surveyData);
    return true; // todo
  }

  navigateNext() : void {
    //this.router.navigate(['/survey']);
  }
}
