/*
JSON Protocol Models for userauth.service
*/

export interface IUserUnavailableQuery {
  user_email: string,
}

export interface IUserUnavailableResponse {
  user_email: string,
  exists: boolean,
}

export interface IUserRegistrationQuery {
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

export interface IUserLoginQuery {
  user_email: string,
  user_password: string,
}

export interface IUserLoginResponse {
  success: boolean,
}
