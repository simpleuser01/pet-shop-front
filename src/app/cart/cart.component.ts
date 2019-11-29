import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product/product-service.service';
import {Product} from '../../model/product/product';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Array<Product>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartList();
  }


  getCartList() {
    this.cartService.getCartList().subscribe(data => this.products = data);
  }

  deleteProductFromCartList(product: Product) {
  this.cartService.deleteProductFromCartList(product).subscribe(data => this.getCartList());

  }
}



