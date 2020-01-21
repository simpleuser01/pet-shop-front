import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {AppComponent} from './app.component';
import {TypeListComponent} from './product/type-list/type-list.component';
import {OrderComponent} from './order/order.component';
import {ProductAddComponent} from './product/product-add/product-add.component';
import {MainPageComponent} from './main-page/main-page.component';


const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: '', component: AppComponent},
  {path: 'catalog', component: TypeListComponent},
  {path: 'admin/orders', component: OrderComponent},
  {path: 'admin/add', component: ProductAddComponent},
  {path: 'main', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
