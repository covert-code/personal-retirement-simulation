import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import {
  IUserUnavailableQuery,
  IUserUnavailableResponse,
  IUserRegistrationQuery,
  IUserAuthResponse,
} from 'src/app/services/userauth.service.models';

// Config
import * as backend from 'src/app/config/backend.json';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor(private http: HttpClient) { }

  checkAvailable(data: IUserUnavailableQuery): Observable<boolean> {
    return this.http.post<IUserUnavailableResponse>(
      backend.url + backend.endpoints.user_auth.unavailable,
      data
    ).pipe(
      map<IUserUnavailableResponse, boolean>(
        (reply: IUserUnavailableResponse) => {
          return reply.exists;
        }
      )
    );
  }

  registerCreateUser(data: IUserRegistrationQuery): Observable<boolean> {
    return this.http.post<IUserAuthResponse>(
      backend.url + backend.endpoints.user_auth.create_user,
      data
    ).pipe(
      map<IUserAuthResponse, boolean>(
        (reply: IUserAuthResponse) => {
          return reply.success;
        }
      )
    );
  }

}
