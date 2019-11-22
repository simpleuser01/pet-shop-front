import {ProductMaker} from './product-maker';
import {ProductSize} from './product-size';
import {ProductSubcategory} from './product-subcategory';

export class Product {
  productId: number;
  productName: string;
  productEngName: string;
  productDescription: string;
  productStructure: string;
  productMaker: ProductMaker;
  productSizes: ProductSize[];
  productSubcategory: ProductSubcategory;

}
