import {UnregisterClientAddress} from './unregister-client-address';

export class UnregisterClient {
  clientId: number;
  clientFirstName: string;
  clientEmail: string;
  clientTel: string;

  clientAddress: UnregisterClientAddress;
}
