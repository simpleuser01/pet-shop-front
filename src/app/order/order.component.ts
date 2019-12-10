import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order/order.service';
import {Order} from '../../model/order/order';
import {OrderProduct} from '../../model/order/order-product';
import {Product} from '../../model/product/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: Array<Order>;
  orderProducts: Array<OrderProduct>;
  products: Array<Product>;
  id: number;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe(data => this.orders = data );
  }


  getProductsByOrderId(id: number) {
    this.id = id;
   // this.orderService.getProductsByOrderId(this.id).subscribe(data => this.products = data);
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe(data => this.getAllOrders());
  }


}
