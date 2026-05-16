import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  constructor(private cart: CartService, private wishlist: WishlistService) { }
  wishitems: any;
  product = {
    productId: "",
    productName: "",
    productDescription: "",
    productprice: "",
    productImg: ""
  }
  wishnow(pro: any) {
    this.product = {
      ...pro,
    }
  }
  result: any;
  deleteitem(pid: any) {
    this.result = this.wishlist.deleteitems(pid);
    alert(this.result);
  }
  addnow(pro: any) {
    this.cart.addtoCart(pro);
    alert("Addded to cart")
  }
  user: any;
  username: any;
  ngOnInit() {
    this.user = localStorage.getItem("userloggedin");
    this.user = JSON.parse(this.user);
    this.username = this.user.username;
    this.wishlist.getwishItems().subscribe((data) => {
      this.wishitems = data;
    })
  }

}
