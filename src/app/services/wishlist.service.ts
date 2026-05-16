import { Injectable } from '@angular/core';
import { product } from '../service/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
  wishitems: product[] = [];

  addtoWishlist(productobj: any) {
    this.wishitems.push(productobj);
  }
  getwishItems() {
    return of(this.wishitems);
  }
  deleteitems(pid: any) {
    const index = this.wishitems.findIndex(i => i.productId == pid);
    if (index != -1) {
      this.wishitems.splice(index, 1);
      return "Product removed from wishlist";
    }
    else {
      return "Product not found ";
    }
  }
}
