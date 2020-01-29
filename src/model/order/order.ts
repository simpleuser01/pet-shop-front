import {OrderProduct} from './order-product';
import {UnregisterClient} from '../client/Unregister/unregister-client';
import {RegisterUser} from '../client/RegisterUser/register-user';

export class Order {
  orderId: number;
  orderSumm: string;
  orderDeliveryType: string;
  orderDescription: string;
  orderProducts: OrderProduct[];
  unregisterClient: UnregisterClient;
  registerClient: RegisterUser;

}
