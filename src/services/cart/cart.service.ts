import { Injectable } from '@angular/core';
import {Product} from '../../model/product/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'http://localhost:8080/petshop.by';
  constructor(private httpClient: HttpClient) {

  }

  addProductToCartList(product: Product) {
    return this.httpClient.post(this.url + '/cart', product);
  }

  getCartList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url + '/cart');
  }

  deleteProductFromCartList(product: Product): Observable<any> {
    return this.httpClient.delete(this.url + '/cart' + '/' + `${product.productId}`);
  }
}
