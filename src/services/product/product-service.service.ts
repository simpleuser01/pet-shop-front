import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product/product';
import {ProductType} from '../../model/product/product-type';
import {ProductCategory} from '../../model/product/product-category';
import {ProductSubcategory} from '../../model/product/product-subcategory';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url = 'http://localhost:8080/petshop.by';
  constructor(private httpClient: HttpClient) { }


  getAllProducts(): Observable<Product[]> {
       return  this.httpClient.get<Product[]>(this.url);
  }

  // working
  getAllTypes(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.url + '/catalog');
  }

  getCategoryByType(type: string): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(this.url + '/catalog/' + `${type}`);
  }

  getSubcategoryByCategory(category: string, type: string): Observable<ProductSubcategory[]> {
    return this.httpClient.get<ProductSubcategory[]>(this.url + '/catalog/' + `${type}` + '/' +  `${category}`);
  }





  getProductByCategory(category: string, type: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url + '/catalog/product/' + `${type}` + '/' +  `${category}`);
  }

  getProductBySubcategory(type: string, category: string, subCategory: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url + '/catalog/product/' + `${type}` + '/' + `${category}` + '/' + `${subCategory}` );
  }



  getProductByType(type: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url + '/catalog/product/' + `${type}`);
  }



/*
  getProductsBySubcategory(type: string, category: string, subCategory: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url + '/catalog/' + `${type}` + '/' + `${category}` + '/' + `${subCategory}` );
  }*/


  getImageById(id: number) {
    return this.httpClient.get(this.url + '/images/' + `${id}`);
  }


  addProduct(product: Product) {
    return this.httpClient.post(this.url + '/admin/add', product);
  }


  getALlProductMakers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url + '/makers');
  }


  getAllCategories(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url + '/categories');
  }

  getAllSubcategories(): Observable<any[]> {
    return  this.httpClient.get<any[]>(this.url + '/subCategories');
  }


  getAllProductsForMainPage(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url + '/');
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.url + '/product/' + `${id}`);
  }
}




