/*
Protocols
JSON Interfaces for data input formats to userauth.services
*/

// checkAvailable
export interface IUserUnavailableQuery {
  user_email: string,
}

// registerCreateUser
export interface IUserRegistrationQuery {
  user_email: string,
  user_password: string
  user_title: string;
  user_fname: string;
  user_initial: string;
  user_lname: string;
}

// loginUser
export interface IUserLoginQuery {
  user_email: string,
  user_password: string,
}
