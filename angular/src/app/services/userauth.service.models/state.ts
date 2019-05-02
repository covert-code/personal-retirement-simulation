import { Observable, BehaviorSubject } from 'rxjs';
import { IAuthenticatedRequestBody } from './protocols';

/*
Global user state model specification
*/
export class UserAuthState {
  private authenticated: boolean = false;
  authenticatedStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.authenticated);

  private credentials: ICredentials = {
    username: null,
    password: null,
  }

  constructor() {
    this.authenticatedStatus.subscribe(
      (status: boolean) => { this.authenticated = status; }
    );
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
  
  setAuthenticated(username: string, password: string): void {
    this.credentials.username = username;
    this.credentials.password = password;

    this.authenticatedStatus.next(true);
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
    this.credentials.username = null;
    this.credentials.password = null;

    this.authenticatedStatus.next(false);
  }
}

export interface ICredentials {
  username: string,
  password: string,
}
