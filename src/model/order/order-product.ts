import {Product} from '../product/product';
import {OrderProductKey} from './order-product-key';

export class OrderProduct {

  id: OrderProductKey;
  productQuantity: number;
  productSumm: number;
  productSize: string;
  product: Product;
}
