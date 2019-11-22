import {ProductType} from './product-type';

export class ProductCategory {
  productCategoryId: number;
  productCategoryName: string;
  productCategoryEngName: string;
  productTypes: ProductType[];
}
