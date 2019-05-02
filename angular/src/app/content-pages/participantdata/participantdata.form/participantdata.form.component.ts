import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-participantdata-form',
  templateUrl: './participantdata.form.component.html',
  styleUrls: ['./participantdata.form.component.css']
})
export class ParticipantdataFormComponent {
  
  constructor(
    private router: Router,
  ) {
  }

  participantDataForm = new FormGroup({
    address1: new FormControl(),
    address2: new FormControl(),
    addressCity: new FormControl(),
    addressState: new FormControl(),
    addressZip: new FormControl(),
    birthday: new FormControl(),
    income: new FormControl(),
    marital: new FormControl(),
  });

  onFormSubmitClick(): void { }
}
