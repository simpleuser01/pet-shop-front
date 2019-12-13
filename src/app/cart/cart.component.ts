import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product/product-service.service';
import {Product} from '../../model/product/product';
import {CartService} from '../../services/cart/cart.service';
import {OrderService} from '../../services/order/order.service';
import {Order} from '../../model/order/order';
import {templateJitUrl} from '@angular/compiler';
import {OrderProduct} from '../../model/order/order-product';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {UnregisterClient} from '../../model/client/Unregister/unregister-client';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Array<Product>;
  newOrder = new Order();
  orderProducts: Array<OrderProduct>;
  orderProduct = new OrderProduct();
  quantity: number;
  unregisterHuister = new UnregisterClient();
  order: FormGroup;
//  unregisterClient: FormGroup;


  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit() {
    this.getCartList();
    this.quantity = 1;


    this.order = new FormGroup({
      orderDeliveryType : new FormControl(),
      orderDescription: new FormControl(),
      unregisterClient : new FormGroup({
        clientFirstName: new FormControl(),
        clientEmail: new FormControl(),
        clientTel: new FormControl()
      })
    });


  }


  getCartList() {
    this.cartService.getCartList().subscribe(data => this.products = data);
  }

  deleteProductFromCartList(product: Product) {
  this.cartService.deleteProductFromCartList(product).subscribe(data => this.getCartList());

  }



  /*addToOrders(orderProduct: OrderProduct) {
    this.orderProduct = orderProduct;
    this.orderProduct.productQuantity = this.quantity;
    this.orderService.addOrder(this.orderProduct).subscribe();
  }*/

  addToOrders() {
   /* this.order = this.orderGroup.value;
    /!*this.unregisterHuister = this.unregisterClient.value;
    this.order.unregisterClient = this.unregisterHuister;*!/
    this.order.unregisterClient = this.unregisterClient.value;*/
    this.order = this.order.value;
    this.orderService.addOrder(this.newOrder).subscribe();
    console.log(this.order);
  }

  moreQuantity() {
    this.quantity++;
    console.log(this.quantity);
  }


  lessQuantity() {
    this.quantity--;
  }


  callF() {
    console.log(this.order.value);
  }
}



