import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeListComponent } from './product/type-list/type-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import {OrderComponent} from './order/order.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './templates/footer/footer.component';
import { AdminFooterComponent } from './templates/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './templates/admin-header/admin-header.component';
import { HeaderComponent } from './templates/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeListComponent,
    CartComponent,
    OrderComponent,
    ProductAddComponent,
    FooterComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    HeaderComponent,
    MainPageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatSliderModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
