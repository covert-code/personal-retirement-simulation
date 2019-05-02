import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Models
import { UserAuthState } from 'src/app/services/userauth.service.models/state';
import * as input from 'src/app/services/userauth.service.models/service-interface';
import * as protocol from 'src/app/services/userauth.service.models/protocols';

// Config
import * as backend from 'src/app/config/backend.json';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  state: UserAuthState = new UserAuthState();

  constructor(private http: HttpClient) { }

  // Handles a login request
  loginUser(data: input.IUserLoginQuery): Observable<boolean> {
    return this.http.post<protocol.IUserLoginResponse>(
      backend.url + backend.endpoints.user_auth.login,
      data // pass directly, query and request formats match
    ).pipe(
      map<protocol.IUserLoginResponse, boolean>(
        (reply: protocol.IUserLoginResponse) => {
          if (reply.success) {
            this.state.setAuthenticated(
              data.user_email,
              data.user_password
            );
          }
          return reply.success;
        }
      )
    );
  }

  // Handles a logout request
  logoutUser(): void {
    this.state.deauthenticate();
  }

  /* Registration */

  // Checks if a user email is available for taking
  checkAvailable(data: input.IUserUnavailableQuery): Observable<boolean> {
    return this.http.post<protocol.IUserUnavailableResponse>(
      backend.url + backend.endpoints.user_auth.unavailable,
      data // pass directly, query and request formats match
    ).pipe(
      map<protocol.IUserUnavailableResponse, boolean>(
        (reply: protocol.IUserUnavailableResponse) => {
          return reply.exists;
        }
      )
    );
  }

  // Registers a new user
  registerCreateUser(data: input.IUserRegistrationQuery): Observable<boolean> {
    return this.http.post<protocol.IUserRegistrationResponse>(
      backend.url + backend.endpoints.user_auth.create_user,
      data // pass directly, query and request formats match
    ).pipe(
      map<protocol.IUserRegistrationResponse, boolean>(
        (reply: protocol.IUserRegistrationResponse) => {
          if (reply.success) {
            this.state.setAuthenticated(
              data.user_email,
              data.user_password
            );
          }
          return reply.success;
        }
      )
    );
  }
}
