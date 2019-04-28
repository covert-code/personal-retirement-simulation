import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IParticipant } from 'src/app/models/IParticipant';
import { Observable } from 'rxjs'

const expressPort = 3000;

@Injectable({
  providedIn: 'root'
})
export class InputService {
  constructor(private http: HttpClient) { }

  getParticipantData(): IParticipant {
  	const participantData : IParticipant = {
	  user_id: 0,
	  user_name: "string",
	  participant_addr_1: "string",
	  participant_addr_2: "string",
	  participant_addr_city: "string",
	  participant_addr_state: "string",
	  participant_addr_zip: "string",
	  participant_birthdate: "string",
	  participant_income: 0.01,
	  participant_marital: "yes",
	};

    return participantData;
  }

  postParticipantData(data: IParticipant) {
    return this.http.post('http://localhost:3000/postParticipantData', data);
  }
}
