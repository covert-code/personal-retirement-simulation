/* IUser
JSON Interface Model for client-side specification of user account
*/

export interface IUser {
  user_email: string,
  user_password: string
}

export interface IUserTransmittable {
  user_email: string,
  user_authhash: string
}
