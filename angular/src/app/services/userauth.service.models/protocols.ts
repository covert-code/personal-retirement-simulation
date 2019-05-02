import * as queries from './service-interface';
import { ICredentials } from './state';

/*
Protocols
JSON Protocol Models for userauth.service requests and replies with server
*/

// Generic action feedback success response
export interface IActionStatusResponse { success: boolean }

// Wrapper format for authentication-dependent requests
export interface IAuthenticatedRequestBody<BodyType> {
  credentials: ICredentials,
  data : BodyType,
}


/* Endpoints */

// backend.endpoints.user_auth.unavailable
export interface IUserUnavailableRequest extends queries.IUserUnavailableQuery { }
export interface IUserUnavailableResponse {
  user_email: string,
  exists: boolean,
}

// backend.endpoints.user_auth.create_user
export interface IUserRegistrationRequest extends queries.IUserRegistrationQuery { }
export interface IUserRegistrationResponse extends IActionStatusResponse { }

// backend.endpoints.user_auth.login
export interface IUserLoginRequest extends queries.IUserLoginQuery { }
export interface IUserLoginResponse extends IActionStatusResponse { }
