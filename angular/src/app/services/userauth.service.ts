import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import * as model from 'src/app/services/userauth.service.models/state';
import * as input from 'src/app/services/userauth.service.models/service-interface';
import * as protocol from 'src/app/services/userauth.service.models/protocols';

// Config
import * as backend from 'src/app/config/backend.json';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  state: model.IUserAuthState = new model.IUserAuthState();

  constructor(private http: HttpClient) { }

  checkAvailable(data: input.IUserUnavailableQuery): Observable<boolean> {
    var req: protocol.IUserUnavailableRequest

    return this.http.post<protocol.IUserUnavailableResponse>(
      backend.url + backend.endpoints.user_auth.unavailable,
      data
    ).pipe(
      map<protocol.IUserUnavailableResponse, boolean>(
        (reply: protocol.IUserUnavailableResponse) => {
          return reply.exists;
        }
      )
    );
  }

  registerCreateUser(data: input.IUserRegistrationQuery): Observable<boolean> {
    return this.http.post<protocol.IUserRegistrationResponse>(
      backend.url + backend.endpoints.user_auth.create_user,
      data
    ).pipe(
      map<protocol.IUserRegistrationResponse, boolean>(
        (reply: protocol.IUserRegistrationResponse) => {
          return reply.success;
        }
      )
    );
  }

  loginUser(data: input.IUserLoginQuery): Observable<boolean> {
    return this.http.post<protocol.IUserLoginResponse>(
      backend.url + backend.endpoints.user_auth.login,
      data
    ).pipe(
      map<protocol.IUserLoginResponse, boolean>(
        (reply: protocol.IUserLoginResponse) => {
          return reply.success;
        }
      )
    );
  }
}
