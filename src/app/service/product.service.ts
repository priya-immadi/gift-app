import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
     productlist:product[]=[
    {
      productId:'1',
      productName:"Rose Flower",
      productDescription:"Where words fail, red flowers speak.",
      productprice:"200",
      productImg:"https://5.imimg.com/data5/DX/GQ/FC/SELLER-18895112/05-500x500.jpg"
    },
    {
      productId:'2',
      productName:"chocolate",
      productDescription:"Sweet moments begin with chocolate.",
      productprice:"500",
      productImg:"https://api.floraindia.com/upload/qhCKdEUGki1718019394248.webp"
    },
    {
      productId:'3',
      productName:"Teddy Bear",
      productDescription:"A soft reminder that you’re never alone.",
      productprice:"3000",
      productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPHpMzJe0G7s1dqtNu_4j4PcLPWjuR0wrFQ&s"
    },
    {
      productId:'4',
      productName:"Photo Frame",
      productDescription:"Frame your happiest memories forever.",
      productprice:"1000",
      productImg:"https://46memories.in/cdn/shop/files/newborn-baby-frame_586d665d-0ba2-4cc3-8110-019df15a62f5.jpg?v=1722395784"
    },
    {
     productId:'5',
      productName:"Watch",
      productDescription:"Because every second counts.",
      productprice:"500",
      productImg:"https://zimsonwatches.com/cdn/shop/articles/Fossil-Blog-Image.png?v=1710996978&width=1100"
    },
    {
      productId:'6',
      productName:"Rings",
      productDescription:"Endless love, perfectly shaped",
      productprice:"50000",
      productImg:"https://m.media-amazon.com/images/I/41RlPEqBUdL._AC_UY1100_.jpg"
    },
    {
      productId:'7',
      productName:"Panda",
      productDescription:"Smile like a panda — soft and pure.",
      productprice:"1200",
      productImg:"https://www.temptingkart.com/cdn/shop/files/panda-night-lamp-silicone-soft-light.jpg?v=1751110398&width=800"
    },
    {
      productId:'8',
      productName:"keychains",
      productDescription:"A little charm for your everyday journey",
      productprice:"100",
      productImg:"https://m.media-amazon.com/images/I/81vmsK6p04L._AC_UY1100_.jpg"
    }


  ]

  getLaptops(){
    return of(this.productlist);
  }

  getLaptopById(pid:any){
    return this.productlist.find(i=>i.productId==pid);
  }
  
 addLaptops(laptop:any){
    this.productlist.push(laptop);
    return "product added successfully"
  }
   deletelaptop(pid:any){
    const index=this.productlist.findIndex(i=>i.productId==pid);
    if(index==-1){
      return "product not found"
    }
    else{
      this.productlist.splice(index,1);
      return "product delete"
    }

   }
   updateLaptop(updated:any){
    const index=this.productlist.findIndex(i=>i.productId==updated.productId);
    this.productlist.splice(index,1,updated);
    return "product updated"
   }
}