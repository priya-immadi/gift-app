import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
constructor(private service:CartService,private order:OrderService){}
  cartitems:any;address:any;phone:any;
  product={
    productId:"",
    productName:"",
    productDescription:"",
    productprice:"",
    productImg:""
  }
  buynow(pro:any){
    this.product={
      ...pro,
    }
  }
  placeorder(){
    this.order.placeorder({
      ...this.product,
      username:this.username,
      address:this.address,
      phone:this.phone
    })
    alert("order placed")
  }
  result:any;

  deleteitems(pid:any){
    this.result=this.service.deleteitems(pid);
  alert(this.result);
  }

user:any;username:any;
  ngOnInit(){
    this.user=localStorage.getItem("userloggedin");
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
    this.service.getCartItems().subscribe((data)=>{
      this.cartitems=data;
    })
  }

}