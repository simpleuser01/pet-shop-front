import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../../model/order/order';
import {Product} from '../../model/product/product';
import {OrderProduct} from '../../model/order/order-product';
import {OrderWrapper} from '../../model/order/order-wrapper';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:8080/petshop.by';
  constructor(private httpClient: HttpClient) { }


  getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.url + '/admin/orderss');
  }

  getProductsByOrderId(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url + '/admin/orderss/' + `${id}`);
  }

  addOrder(order: OrderWrapper): Observable<Order[]> {
    return  this.httpClient.post<Order[]>(this.url   + '/admin/orders/', order );
  }


  deleteOrder(id: number) {
    return this.httpClient.delete(this.url + '/admin/orders/' + `${id}`);
  }

  addOrderForRegisterUser(order: OrderWrapper): Observable<Order[]> {
    return  this.httpClient.post<Order[]>(this.url   + '/admin/order/', order );
  }
}
