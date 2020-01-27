import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product/product';
import {ProductServiceService} from '../../../services/product/product-service.service';
import {ProductType} from '../../../model/product/product-type';
import {ProductCategory} from '../../../model/product/product-category';
import {ProductSubcategory} from '../../../model/product/product-subcategory';
import {CartService} from '../../../services/cart/cart.service';
import {ProductSize} from '../../../model/product/product-size';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {Router} from '@angular/router';


interface CategoryNode { // тестовый интерфейс
  name: string;
  children?: CategoryNode[];
}

const TREE_DATA: CategoryNode[] = [ // дичь
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];


@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {

    productTypes: Array<ProductType>;
    productCategories: Array<ProductCategory>;
    productSubcategories: Array<ProductSubcategory>;
    products: Array<Product>;
    categoryProducts: Array<Product>;
    data: any;
    product: Product;
    clickedType: string;
    clickedCategory: string;
    clickedSubCategory: string;
    productPrice: number;
    productSize: string;
    isClick = false;
    showFiller: any;
    // эти две штучки тупо ради теста
    treeControl = new NestedTreeControl<CategoryNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<CategoryNode>();
  constructor(private productService: ProductServiceService, private cartService: CartService, private router: Router) {
    this.dataSource.data = TREE_DATA; // тут тоже и тут
  }

  hasChild = (_: number, node: CategoryNode) => !!node.children && node.children.length > 0; // и тут

  ngOnInit() {

    this.productService.getAllTypes()
      .subscribe(data => this.productTypes = data);


    this.productService.getAllProductsForMainPage().subscribe(data => this.products = data);

   /* this.productService.getProductByType(this.clickedType)
      .subscribe(data => this.products = data);*/
  }

  getCategoryByType(type: string) {
      this.clickedType = type;
      console.log('type: ' + this.clickedType);
      this.productService.getCategoryByType(this.clickedType)
        .subscribe(data => this.productCategories = data);
      this.products = null;
      this.categoryProducts = null;
  }


  getProductsAndSubCategories(category: string) {
    this.getProductByCategory(category);
    this.getSubcategoryByCategory(category);
  }

  getProductByCategory(category: string) {
    this.clickedCategory = category;
    this.productService.getProductByCategory(this.clickedCategory, this.clickedType)
      .subscribe(data => this.categoryProducts = data);
   /* this.categoryProducts.forEach( product => {
        this.getImageById(product.productId);
      });
*/
  }

  getSubcategoryByCategory(category: string) {
    this.clickedCategory = category;
    console.log( 'type + category: ' + this.clickedType + ' ' + this.clickedCategory);
    this.productService.getSubcategoryByCategory(this.clickedCategory, this.clickedType)
      .subscribe(data => this.productSubcategories = data);
  }


  getProductBySubcategory(subCategory: string) {
    this.clickedSubCategory = subCategory;
    console.log('type + category + subcategory : ' + this.clickedType + ' ' + this.clickedCategory + ' ' + this.clickedSubCategory );
    this.productService.getProductBySubcategory(this.clickedType, this.clickedCategory, this.clickedSubCategory)
      .subscribe(data => this.products = data);
    this.clickedType = null;
  }


  getImageById(id: number) {
    this.productService.getImageById(id)
      .subscribe(data => this.data = data);
  }

  addProductToCartList(product: Product) {
    this.product = product;
    this.product.productSize = this.productSize;
    this.product.productPrice = this.productPrice;
    this.cartService.addProductToCartList(this.product)
      .subscribe();
  }

  getSizeAndPrice(size: ProductSize) {
    this.productSize = size.productSizeValue;
    this.productPrice = size.productPrice;
  }

  onClickMenu(event) {
    const lalka = document.getElementById('test');
    lalka.style.color = 'Red';
    console.log(event);
  }

  getProductInfo(product: Product) {
    this.router.navigate(['/product/' + product.productId]);
    console.log(product);
  }


}

