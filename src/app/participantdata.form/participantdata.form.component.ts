import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputService } from '../services/input.service';
import { IParticipant } from '../models/IParticipant';

@Component({
  selector: 'app-participantdata-form',
  templateUrl: './participantdata.form.component.html',
  styleUrls: ['./participantdata.form.component.css']
})
export class ParticipantdataFormComponent {

  participantData: IParticipant;
  inputService: InputService;

  form = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    birthday: new FormControl(),
    income: new FormControl(),
    marital: new FormControl(),
  });

  constructor() {
  }

  logFormContents() {
    console.log(this.form.value);
  }
}
