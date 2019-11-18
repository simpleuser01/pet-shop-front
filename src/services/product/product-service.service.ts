import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product/product';
import {ProductType} from '../../model/product/product-type';
import {ProductCategory} from '../../model/product/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url = 'http://localhost:8080/petshop.by/';
  constructor(private httpClient: HttpClient) { }


  getAllProducts(): Observable<Product[]> {
       return  this.httpClient.get<Product[]>(this.url);
  }

  getAllTypes(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.url + '/catalog');
  }

  getCategoryByType(type: string): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(this.url + '/catalog/' + `${type}`);
  }
}

