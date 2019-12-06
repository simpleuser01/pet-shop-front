import {ProductMaker} from './product-maker';
import {ProductSize} from './product-size';
import {ProductSubcategory} from './product-subcategory';
import {OrderProduct} from '../order/order-product';

export class Product {
  productId: number;
  productName: string;
  productEngName: string;
  productDescription: string;
  productStructure: string;
  productImage: string;
  productMaker: ProductMaker;
  productSizes: ProductSize[];
  productSubcategory: ProductSubcategory;
  productSize: string;
  productPrice: number;
  orderProducts: OrderProduct[];

}
