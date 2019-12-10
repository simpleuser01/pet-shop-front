import {ProductCategory} from './product-category';

export class ProductSubcategory {
  productSubcategoryId: number;
  productSubcategoryName: string;
  productSubcategoryEngName: string;
  /*productCategories: ProductCategory[];*/
  productCategory: ProductCategory;
}
