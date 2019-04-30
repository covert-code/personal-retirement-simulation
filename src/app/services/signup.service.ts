import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { IParticipant } from 'src/app/models/IParticipant';
import { IParticipantSurvey } from 'src/app/models/IParticipantSurvey';
import { IUser } from 'src/app/models/IUser';

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

  /* createuser.form */
  postCreateUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(
      'http://localhost:3000/postCreateUser',
      data
    );
  }

  /* participantdata.form */
  postParticipantData(data: IParticipant): Observable<IParticipant> {
    return this.http.post<IParticipant>(
    	'http://localhost:3000/postParticipantData',
    	data
    );
  }


  /* survey.form */
  postParticipantSurveyData(data: IParticipantSurvey): Observable<IParticipantSurvey> {
    return this.http.post<IParticipantSurvey>(
      'http://localhost:3000/postParticipantSurveyData',
      data
    );
  }
}
