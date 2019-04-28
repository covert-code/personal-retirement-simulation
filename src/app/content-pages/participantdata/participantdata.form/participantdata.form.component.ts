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

  constructor(private signupService: SignupService) {
      this.participantData =  {
        participant_fname: "",
        participant_initial: "",
        participant_lname: "",
        participant_addr_1: "",
        participant_addr_2: "",
        participant_addr_city: "",
        participant_addr_state: "",
        participant_addr_zip: "",
        participant_birthdate: "",
        participant_income: 0,
        participant_marital: "",
    };
  }

  form = new FormGroup({
    firstName: new FormControl(),
    initial: new FormControl(),
    lastName: new FormControl(),
    address1: new FormControl(),
    address2: new FormControl(),
    addressCity: new FormControl(),
    addressState: new FormControl(),
    addressZip: new FormControl(),
    birthday: new FormControl(),
    income: new FormControl(),
    marital: new FormControl(),
  });

  validateFormContents(): boolean {
    console.log(this.form.value);
    return true; // todo
  }

  commitFormContents(): void {
    this.participantData.participant_fname = this.form.get('firstName').value;
    this.participantData.participant_initial = this.form.get('initial').value;
    this.participantData.participant_lname = this.form.get('lastName').value;
    this.participantData.participant_addr_1 = this.form.get('address1').value;
    this.participantData.participant_addr_2 = this.form.get('address2').value;
    this.participantData.participant_addr_city = this.form.get('addressCity').value;
    this.participantData.participant_addr_state = this.form.get('addressState').value;
    this.participantData.participant_addr_zip = this.form.get('addressZip').value;
    this.participantData.participant_birthdate = this.form.get('birthday').value;
    this.participantData.participant_income = this.form.get('income').value;
    this.participantData.participant_marital = this.form.get('marital').value;
  }

  logFormContents() {
    if (this.validateFormContents()) {
      this.commitFormContents();
      this.signupService.postParticipantData(this.participantData);
    }  
  }

  initializeFormContents() {
    const preloadData : IParticipant = this.signupService.getParticipantData();
    this.form.get('firstName').setValue(preloadData.participant_fname);
    this.form.get('initial').setValue(preloadData.participant_initial);
    this.form.get('lastName').setValue(preloadData.participant_lname);
    this.form.get('address1').setValue(preloadData.participant_addr_1);
    this.form.get('address2').setValue(preloadData.participant_addr_2);
    this.form.get('addressCity').setValue(preloadData.participant_addr_city);
    this.form.get('addressState').setValue(preloadData.participant_addr_state);
    this.form.get('addressZip').setValue(preloadData.participant_addr_zip);
    this.form.get('birthday').setValue(preloadData.participant_birthdate);
    this.form.get('income').setValue(preloadData.participant_income);
    this.form.get('marital').setValue(preloadData.participant_marital);
  }
}
