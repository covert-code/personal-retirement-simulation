import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IParticipant } from 'src/app/models/IParticipant';

const expressPort = 3000;

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) { }

  getParticipantData(): IParticipant {
  	const participantData : IParticipant = {
      participant_fname: "string",
      participant_initial: "string",
      participant_lname: "string",
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

  postParticipantData(data: IParticipant): Observable<IParticipant> {
    return this.http.post<IParticipant>(
    	'http://localhost:3000/postParticipantData',
    	data
    );
  }
}
