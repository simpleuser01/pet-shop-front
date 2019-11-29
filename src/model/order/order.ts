import {OrderProduct} from './order-product';

export class Order {
  orderId: number;
  orderSumm: string;
  orderDeliveryType: string;
  orderDescription: string;
  orderProducts: OrderProduct[];


}
