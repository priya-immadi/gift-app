import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any;
    constructor(private service:ProductService,private router:Router){}

  opendetails(proid:any){
    this.router.navigateByUrl(`/user/details/${proid}`)
  }

  ngOnInit(){
    this.service.getLaptops().subscribe((data)=>{
      this.products=data;
    })
  } 

}
