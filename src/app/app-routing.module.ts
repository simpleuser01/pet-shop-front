import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {AppComponent} from './app.component';
import {TypeListComponent} from './product/type-list/type-list.component';


const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: '', component: AppComponent},
  {path: 'catalog', component: TypeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
