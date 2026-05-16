import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  pid:any;laptop:any;
  constructor(private bs:ActivatedRoute,private service:ProductService,private cart:CartService, private wishlist:WishlistService){}
  
  addnow(){
    this.cart.addtoCart(this.laptop);
    alert("added to cart");
  }

  wishnow(){
    this.wishlist.addtoWishlist(this.laptop);
    alert("added to wishlist")
  }
  
  
  ngOnInit(){
    this.pid=this.bs.snapshot.paramMap.get("pid")
    if(this.pid){
      this.laptop=this.service.getLaptopById(this.pid);
      console.log(this.laptop)
    }
  }
}