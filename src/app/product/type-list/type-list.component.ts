import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product/product';
import {ProductServiceService} from '../../../services/product/product-service.service';
import {ProductType} from '../../../model/product/product-type';
import {ProductCategory} from '../../../model/product/product-category';
import {ProductSubcategory} from '../../../model/product/product-subcategory';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {
    productTypes: Array<ProductType>;
    productCategories: Array<ProductCategory>;
    productSubcategories: Array<ProductSubcategory>;
    products: Array<Product>;


    clickedType: string;
    clickedCategory: string;
    clickedSubCategory: string;

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {

    this.productService.getAllTypes()
      .subscribe(data => this.productTypes = data);

   /* this.productService.getProductByType(this.clickedType)
      .subscribe(data => this.products = data);*/
  }

  getCategoryByType(type: string) {
      this.clickedType = type;
      console.log('type: ' + this.clickedType);
      this.productService.getCategoryByType(this.clickedType)
        .subscribe(data => this.productCategories = data);
  }


  getProductsAndSubCategories(category: string) {
    this.getProductByCategory(category);
    this.getSubcategoryByCategory(category);
  }

  getProductByCategory(category: string) {
    this.clickedCategory = category;
    this.productService.getProductByCategory(this.clickedCategory, this.clickedType)
      .subscribe(data => this.products = data);
  }

  getSubcategoryByCategory(category: string) {
    this.clickedCategory = category;
    console.log( 'type + category: ' + this.clickedType + ' ' + this.clickedCategory);
    this.productService.getSubcategoryByCategory(this.clickedCategory, this.clickedType)
      .subscribe(data => this.productSubcategories = data);
  }


  getProductBySubcategory(subCategory: string) {
    this.clickedSubCategory = subCategory;
    console.log('type + category + subcategory : ' + this.clickedType + ' ' + this.clickedCategory + ' ' + this.clickedSubCategory );
    this.productService.getProductBySubcategory(this.clickedType, this.clickedCategory, this.clickedSubCategory)
      .subscribe(data => this.products = data);
  }

}
