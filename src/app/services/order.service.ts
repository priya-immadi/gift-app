import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  orders:any[]=[];

  placeorder(obj:any){
    console.log(obj);
    this.orders.push(obj);
  }
  getAllOrders(){
    return of(this.orders);
  }
  getOrdersByUsername(username:any){
      return of( this.orders.filter(e=>e.username==username));
  }



}
