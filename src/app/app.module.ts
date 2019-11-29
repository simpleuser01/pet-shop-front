import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeListComponent } from './product/type-list/type-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import {OrderComponent} from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    TypeListComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
