import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
    user:any;username:any;list:any;

  constructor(private order:OrderService){}
  ngOnInit(){
    this.user=localStorage.getItem("userloggedin");
    this.user=JSON.parse(this.user);
    this.username=this.user.username;
    this.order.getOrdersByUsername(this.username).subscribe((data)=>{
        this.list=data;
    })
  }

}

