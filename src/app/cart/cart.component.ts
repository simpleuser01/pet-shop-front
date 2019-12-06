import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product/product-service.service';
import {Product} from '../../model/product/product';
import {CartService} from '../../services/cart/cart.service';
import {OrderService} from '../../services/order/order.service';
import {Order} from '../../model/order/order';
import {templateJitUrl} from '@angular/compiler';
import {OrderProduct} from '../../model/order/order-product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Array<Product>;
  order: Order;
  orderProducts: Array<OrderProduct>;

  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit() {
    this.getCartList();
  }


  getCartList() {
    this.cartService.getCartList().subscribe(data => this.products = data);
  }

  deleteProductFromCartList(product: Product) {
  this.cartService.deleteProductFromCartList(product).subscribe(data => this.getCartList());

  }



  addToOrders() {


    this.orderService.addOrder(this.products).subscribe();
  }
}



