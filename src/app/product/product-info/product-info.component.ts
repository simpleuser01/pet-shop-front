import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../../services/product/product-service.service';
import {Product} from '../../../model/product/product';
import {ProductSize} from '../../../model/product/product-size';
import {CartService} from '../../../services/cart/cart.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  product: Product;
  productId: number;
  productPrice: number;
  productSize: string;
  constructor(private productService: ProductServiceService, private cartService: CartService, private actRoute: ActivatedRoute) {
    this.productId = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.productService.getProductById(this.productId).subscribe(data => this.product = data);
  }
  getSizeAndPrice(size: ProductSize) {
    this.productSize = size.productSizeValue;
    this.productPrice = size.productPrice;
  }
  addProductToCartList(product: Product) {
    this.product = product;
    this.product.productSize = this.productSize;
    this.product.productPrice = this.productPrice;
    this.cartService.addProductToCartList(this.product)
      .subscribe();
  }

}
