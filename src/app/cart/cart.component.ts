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
  orderProduct = new OrderProduct();
  quantity: number;


  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit() {
    this.getCartList();
    this.quantity = 1;
  }


  getCartList() {
    this.cartService.getCartList().subscribe(data => this.products = data);
  }

  deleteProductFromCartList(product: Product) {
  this.cartService.deleteProductFromCartList(product).subscribe(data => this.getCartList());

  }



  addToOrders(orderProduct: OrderProduct) {
    this.orderProduct = orderProduct;
    this.orderProduct.productQuantity = this.quantity;
    this.orderService.addOrder(this.orderProduct).subscribe();
  }

  moreQuantity() {
    this.quantity++;
    console.log(this.quantity);
  }


  lessQuantity() {
    this.quantity--;
  }
}



