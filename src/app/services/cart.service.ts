import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { product } from '../service/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartitems:product[]=[];

  addtoCart(productobj:any){
    this.cartitems.push(productobj);
  }
  getCartItems(){
    return of(this.cartitems);
  }
  getCartLength(){
    return this.cartitems.length;
  }
 deleteitems(pid:any){
      const index=this.cartitems.findIndex(i=>i.productId==pid);
      if(index!= -1){
        this.cartitems.splice(index,1);
      return "Product removed from wishlist";
}
else {
  return "Product not found ";
}
    }


}