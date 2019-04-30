/* IParticipantNew
JSON Interface Model for responses from new user registration
*/

import { IUser } from './IUser';

export interface IParticipantNew {
  user : IUser;
  participant_fname: string;
  participant_initial: string;
  participant_lname: string;
}
