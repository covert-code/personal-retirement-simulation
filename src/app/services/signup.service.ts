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

  postParticipantData(data: IParticipant): Observable<IParticipant> {
    return this.http.post<IParticipant>(
    	'http://localhost:3000/postParticipantData',
    	data
    );
  }
}
