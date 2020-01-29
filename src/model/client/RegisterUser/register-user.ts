import {RegisterClientAddress} from './register-client-address';

export class RegisterUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  tel: number;
  userName?: string;
  password: string;
  registerClientAddress: RegisterClientAddress;


}
