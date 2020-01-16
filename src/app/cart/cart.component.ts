import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product/product-service.service';
import {Product} from '../../model/product/product';
import {CartService} from '../../services/cart/cart.service';
import {OrderService} from '../../services/order/order.service';
import {Order} from '../../model/order/order';
import {templateJitUrl} from '@angular/compiler';
import {OrderProduct} from '../../model/order/order-product';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {UnregisterClient} from '../../model/client/Unregister/unregister-client';
import {OrderWrapper} from '../../model/order/order-wrapper';

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
  unregisterClient: UnregisterClient;
  order: FormGroup;
  isCourierDeliveryShown = false;
//  unregisterClient: FormGroup;

  orderWrapper = new OrderWrapper();


  map: Map<number, number> = new Map<number, number>();


  constructor(private cartService: CartService, private orderService: OrderService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getCartList();
    this.quantity = 1;
    this.order = this.fb.group({
      orderDeliveryType : [''],
      orderDescription: [''],
      unregisterClient: this.fb.group({
        clientFirstName: [''],
        clientEmail: [''],
        clientTel: [''],
          clientAddress: this.fb.group({
            addressCountry: [''],
            addressCity: [''],
            addressStreet: [''],
            addressHome: [''],
            addressFlat: ['']
          })
      })
    });

   // this.map.set(1, this.quantity);

  }



  addProductsToMap() {
    this.products.forEach(p => this.map.set(p.productId, this.quantity));
  }


  getCartList() {
    this.cartService.getCartList().subscribe(data => { this.products = data,
          this.addProductsToMap(); });
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
    this.newOrder = this.order.value;
    this.orderProduct.productQuantity = this.quantity;
    this.orderWrapper.order = this.newOrder;
  /*  this.orderWrapper.orderProduct = this.orderProduct;*/
    this.orderWrapper.map = this.mapToObj(this.map);
    this.orderService.addOrder(this.orderWrapper).subscribe();
   // console.log(this.newOrder);
    console.log(this.orderWrapper);
  //  console.log(this.map);
  }


  mapToObj(strMap) {
    const obj = Object.create(null);
    for (const [k, v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }
  // TODO осуждаю название переменных)00
  moreQuantity(product: Product) {
   let q = this.map.get(product.productId);
   q++;
   this.map.set(product.productId, q);
   console.log(this.map);
  }

  // TODO осуждаю название переменных х2)000)
  lessQuantity(product: Product) {
    let q = this.map.get(product.productId);
    q--;
    if (q === 0) {
      q = 1;
    }
    this.map.set(product.productId, q );
    console.log(this.map);
  }

  showCourierDeliver() {
    this.isCourierDeliveryShown = !this.isCourierDeliveryShown;
  }
}



