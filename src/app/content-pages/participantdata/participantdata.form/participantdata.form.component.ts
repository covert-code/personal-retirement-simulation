import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { IParticipant } from 'src/app/models/IParticipant';

@Component({
  selector: 'app-participantdata-form',
  templateUrl: './participantdata.form.component.html',
  styleUrls: ['./participantdata.form.component.css']
})
export class ParticipantdataFormComponent {

  participantData: IParticipant;
  //inputService: SignupService;

  constructor(private inputService: SignupService) {
    this.initializeFormContents();
  }

  form = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    birthday: new FormControl(),
    income: new FormControl(),
    marital: new FormControl(),
  });

  logFormContents() {
    console.log(this.inputService.postParticipantData(this.form.value));
  }

  initializeFormContents() {
    const preloadData : IParticipant = this.inputService.getParticipantData();
    if (preloadData.user_id != 0) {
      this.form.get('name').setValue(preloadData.user_name);
      this.form.get('address').setValue(preloadData.participant_addr_1);
      this.form.get('birthday').setValue(preloadData.participant_birthdate);
      this.form.get('income').setValue(preloadData.participant_income);
      this.form.get('marital').setValue(preloadData.participant_marital);
    }
  }
}
