import {Order} from './order';
import {OrderProduct} from './order-product';

export class OrderWrapper {
  order: Order;
  /*orderProduct: OrderProduct;*/
  map: Map<number, number>;
}
