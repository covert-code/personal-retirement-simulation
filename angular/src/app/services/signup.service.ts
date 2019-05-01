import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { IParticipant } from 'src/app/models/IParticipant';
import { IParticipantSurvey } from 'src/app/models/IParticipantSurvey';
import { IUser } from 'src/app/models/IUser';

// Config
import * as backend from 'src/app/config/backend.json';

/*
SignupService

This service contains supporting functions related to HTTP communications to server
for pages involved in the creation of new user accounts and initial survey details.
*/

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  /* participantdata.form */
  postParticipantData(data: IParticipant): Observable<IParticipant> {
    return this.http.post<IParticipant>(
      backend.url + backend.endpoints.surveys.user_info_survey,
    	data
    );
  }


  /* survey.form */
  postParticipantSurveyData(data: IParticipantSurvey): Observable<IParticipantSurvey> {
    return this.http.post<IParticipantSurvey>(
      backend.url + backend.endpoints.surveys.user_retirement_survey,
      data
    );
  }
}
