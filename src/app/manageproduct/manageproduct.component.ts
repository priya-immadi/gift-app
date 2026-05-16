import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrl: './manageproduct.component.css'
})
export class ManageproductComponent {
updated={
  productId:'',
  productName:'',
  productDescription:'',
  productprice:'',
  productImg:''
}
updatenow(product:any){
  // console.log(product)
  this.updated={...product

  }
}
submitproduct(){
  this.result=this.service.updateLaptop(this.updated);
  alert(this.result);

}
constructor(private service:ProductService){}
products:any;
result:any;
deleteit(pid:any){
  this.result=this.service.deletelaptop(pid);
  alert(this.result)
}

ngOnInit(){
this.service.getLaptops().subscribe((data)=>{
  this.products=data;
})
}
  }

