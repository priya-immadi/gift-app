import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
productForm: FormGroup = new FormGroup("");
  constructor(private fb: FormBuilder,private service:ProductService) {
    this.productForm = this.fb.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productDescripition: ['', Validators.required],
      productprice: ['', Validators.required],
      productImage: ['', Validators.required],
    })
  }
  result:any;
  addnow(){
   this.result= this.service.addLaptops(this.productForm.value)
   alert(this.result)
   this.productForm.reset();
  }

}