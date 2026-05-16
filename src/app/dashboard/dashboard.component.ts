import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
user:any;username:any;cartlen:any;
  constructor(private router:Router){}
  logout(){
    localStorage.removeItem("adminloggedin")
    this.router.navigateByUrl("")
  }
  
  ngOnInit(){ 
    if(localStorage.getItem('adminloggedin')){
      this.user=localStorage.getItem("adminloggedin");
      this.user=JSON.parse(this.user)
      this.username=this.user.username
    }
    else{
      this.router.navigateByUrl("")
    }
  }

}
