import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product/product-service.service';
import {Product} from '../../model/product/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Array<Product>;

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.getCartList();
  }


  getCartList() {
    this.productService.getCartList().subscribe(data => this.products = data);
  }

  deleteProductFromCartList(product: Product) {
  this.productService.deleteProductFromCartList(product).subscribe(data => this.getCartList());

  }
}



