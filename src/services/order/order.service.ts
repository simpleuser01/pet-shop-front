import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../../model/order/order';
import {Product} from '../../model/product/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:8080/petshop.by';
  constructor(private httpClient: HttpClient) { }


  getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.url + '/admin/orders');
  }

  getProductsByOrderId(id: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url + '/admin/orders/' + `${id}`);
  }
}
