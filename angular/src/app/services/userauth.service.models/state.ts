import { Observable } from 'rxjs';
import { IAuthenticatedRequestBody } from './protocols';

/*
Global user state model specification
*/
export class UserAuthState {
  authenticated: boolean = false;
  private credentials: ICredentials = {
    username: null,
    password: null,
  }
  
  setAuthenticated(username: string, password: string): void {
    this.authenticated = true;
    this.credentials.username = username;
    this.credentials.password = password;
  }

  authenticateRequest<T>(request: T): IAuthenticatedRequestBody<T> {
    if (!this.authenticated) {
      var requestBody: string = JSON.stringify(request);
      console.error(
        'Attempted to make an authentication-dependent \
        request while not authenticated. ${requestBody}'
      );
      return null;
    }
    var authRequest : IAuthenticatedRequestBody<T> = {
      credentials: {
        username: this.credentials.username,
        password: this.credentials.password
      },
      data: request
    }
    return authRequest;
  }

  deauthenticate(): void {
    this.authenticated = false;
    this.credentials.username = null;
    this.credentials.password = null;
  }
}

export interface ICredentials {
  username: string,
  password: string,
}
