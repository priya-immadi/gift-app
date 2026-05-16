import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent {
  laptops:any;
  constructor(private service:ProductService){}

  ngOnInit(){
    this.service.getLaptops().subscribe((data)=>{
        this.laptops=data;
        console.log(this.laptops)
    })
  }

}
