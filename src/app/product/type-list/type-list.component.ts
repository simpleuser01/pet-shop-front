import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product/product';
import {ProductServiceService} from '../../../services/product/product-service.service';
import {ProductType} from '../../../model/product/product-type';
import {ProductCategory} from '../../../model/product/product-category';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {
    productTypes: Array<ProductType>;
    productCategories: Array<ProductCategory>;
    type: string;
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {

    this.productService.getAllTypes().subscribe(data => this.productTypes = data);
  }

  getCategoryByType(type: string) {
      this.type = type;
      console.log(this.type)
      this.productService.getCategoryByType(this.type).subscribe(data => this.productCategories = data);
  }

}
