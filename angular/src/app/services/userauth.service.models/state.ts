import { Observable } from 'rxjs';
import { IAuthenticatedRequestBody } from './protocols';

/*
Global user state model specification
*/
export class UserAuthState {
  private authenticated: boolean = false;
  private credentials: ICredentials = {
    username: null,
    password: null
  }

  getAuthenticated(): boolean {
    return this.authenticated;
  }

  setAuthenticated(username: string, password: string): void {
    this.authenticated = true;
    this.credentials.username = username;
    this.credentials.password = password;
  }

  wrapAuth<T>(request: T): IAuthenticatedRequestBody<T> {
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
