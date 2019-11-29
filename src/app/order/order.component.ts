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
  products: Array<Product>

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe(data => this.orders = data );
  }
}
