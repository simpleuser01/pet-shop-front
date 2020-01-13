import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product/product';
import {ProductMaker} from '../../../model/product/product-maker';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductServiceService} from '../../../services/product/product-service.service';
import {ProductSubcategory} from '../../../model/product/product-subcategory';
import {ProductType} from '../../../model/product/product-type';
import {ProductCategory} from '../../../model/product/product-category';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  isShowAddProduct = false;
  isShowAddType = false;
  isShowAddCategory = false;
  isShowAddSubCategory = false;
  isShowAddProductMaker = false;
  isShowDeleteProduct = false;
  addFormGroup: FormGroup;
  product = new Product();
  productMakers: ProductMaker[];
  productSubcategories: ProductSubcategory[];
  productTypes: ProductType[];
  productCategories: ProductCategory[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.getALlProductMakers().subscribe(data => this.productMakers = data);
    this.productService.getAllSubcategories().subscribe(data => this.productSubcategories = data);
    this.productService.getAllCategories().subscribe(data => this.productCategories = data);
    this.productService.getAllTypes().subscribe(data => this.productTypes = data);


    this.addFormGroup = new FormGroup({
      productName: new FormControl(),
      productEngName: new FormControl(),
      productDescription: new FormControl(),
      productStructure: new FormControl(),
      productMaker: new FormControl(),
      productSubcategory: new FormControl(),
      productCategory: new FormControl(),
      productType: new FormControl()
      /*productImage: new FormControl(),*/

    });
  }

  onSubmit() {
    this.product = this.addFormGroup.value;

   // this.product.productMaker = this.productMaker;
    this.productService.addProduct(this.product).subscribe();
  }

  changeProductMaker(productMaker: ProductMaker) {
  //  this.productMaker.productMakerId = productMaker.productMakerId;
  }

  getProductMaker(productMaker: number) {
   /* this.productMaker = productMaker;*/
    console.log(productMaker);
  }

  AddProductInputShow() {
    this.isShowAddProduct = !this.isShowAddProduct;
  }

  AddProductTypeInputShow() {
    this.isShowAddType = !this.isShowAddType;
  }

  AddCategoryInputShow() {
    this.isShowAddCategory = !this.isShowAddCategory;
  }

  AddSubCategoryInputShow() {
    this.isShowAddSubCategory = !this.isShowAddSubCategory;
  }

  AddProductMaker() {
    this.isShowAddProductMaker = !this.isShowAddProductMaker;
  }

  DeleteProduct() {
    this.isShowDeleteProduct = !this.isShowDeleteProduct;
  }
}
