import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../../model/product/product";
import {ProductMaker} from "../../../model/product/product-maker";
import {ProductSize} from "../../../model/product/product-size";
import {ProductSubcategory} from "../../../model/product/product-subcategory";
import {ProductServiceService} from "../../../services/product/product-service.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
    addFormGroup: FormGroup;
    product = new Product();
    productMakers: ProductMaker[];
    productMaker = new ProductMaker;
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {

      this.productService.getALlProductMakers().subscribe(data => this.productMakers = data)

    this.addFormGroup = new FormGroup({
      productName: new FormControl(),
      productEngName: new FormControl(),
    productDescription: new FormControl(),
    productStructure: new FormControl(),
     /* productMaker: new FormControl(),*/
    /*productImage: new FormControl(),*/

    })
  }

  onSubmit(){
    this.product=this.addFormGroup.value;
    this.product.productMaker = this.productMaker;
    this.productService.addProduct(this.product).subscribe();
  }

  changeProductMaker(productMaker: ProductMaker) {
    this.productMaker.productMakerId=productMaker.productMakerId;
  }

  getProductMaker(productMaker: ProductMaker) {
    this.productMaker=productMaker;
    console.log(productMaker)
  }
}
