/*
Protocols
JSON Protocol Models for userauth.service requests and replies with server
*/

// backend.endpoints.user_auth.unavailable

export interface IUserUnavailableRequest {
  user_email: string,
}

export interface IUserUnavailableResponse {
  user_email: string,
  exists: boolean,
}


// backend.endpoints.user_auth.create_user

export interface IUserRegistrationRequest {
  user_email: string,
  user_password: string
  user_title: string;
  user_fname: string;
  user_initial: string;
  user_lname: string;
}

export interface IUserRegistrationResponse {
  success: boolean,
}


// backend.endpoints.user_auth.login

export interface IUserLoginRequest {
  user_email: string,
  user_password: string,
}

export interface IUserLoginResponse {
  success: boolean,
}
