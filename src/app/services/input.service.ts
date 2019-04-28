import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IParticipant } from 'src/app/models/IParticipant';

const express_port = 3000;

@Injectable({
  providedIn: 'root'
})
export class InputService {
  constructor(private http: HttpClient) { }

  getParticipantData() {
    return this.http.get('http://localhost:3000/'); // requeststring
  }

  postParticipantData(data: IParticipant) {
    return this.http.post('http://localhost:3000/postParticipantData', data);
  }
}
