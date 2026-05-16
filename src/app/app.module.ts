import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './users/cart/cart.component';
import { DetailsComponent } from './users/details/details.component';
import { OrdersComponent } from './users/orders/orders.component';
import { ProductsComponent } from './users/products/products.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AddproductComponent,
    ViewproductComponent,
    ManageproductComponent,
    CartComponent,
    DetailsComponent,
    OrdersComponent,
    ProductsComponent,
    UserdashboardComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
