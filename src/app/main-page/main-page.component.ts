import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../services/product/product-service.service';
import {Product} from '../../model/product/product';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  popularProducts: Product[];

  constructor(private httpService: ProductServiceService) { }

  ngOnInit() {
    this.httpService.getAllProductsForMainPage().subscribe(data => this.popularProducts = data);
  }

}
