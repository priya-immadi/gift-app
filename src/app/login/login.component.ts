// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

//   loginForm!: FormGroup;
//   showLogin: boolean = false;
//   message: string = '';

//   constructor(private fb: FormBuilder,private router: Router) {}

//   ngOnInit() {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       role: ['user', Validators.required]
//     });
//   }

//   openLogin() {
//     this.showLogin = true;
//   }

//   closeLogin() {
//     this.showLogin = false;
//   }
//   user:any;
//   reqpwd: any;

//   checkLogin() {
//     const { username, password, role } = this.loginForm.value;

//     if (this.loginForm.invalid) {
//       this.message = 'Please fill in all fields.';
//       return;
//     }

//     this.reqpwd = this.loginForm.value.username.slice(0, 3) + "123"
//     if (this.loginForm.value.username == "admin" && this.loginForm.value.password == "123") {
//       alert("login success")
//       this.router.navigateByUrl("/admin/add")
//       localStorage.setItem("loggedin", JSON.stringify(this.loginForm.value))
//     }
//     else if (this.loginForm.value.password == this.reqpwd) {
//       alert("login success")
//       this.router.navigateByUrl("/user")
//       localStorage.setItem("userloggedin", JSON.stringify(this.loginForm.value))

//     }
//     else {
//       alert("login failed")
//     }
//   }
// }





import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  showLogin: boolean = false;
  message: string = '';

  user: any;
  reqpwd: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['user', Validators.required]
    });

  }

  openLogin() {
    this.showLogin = true;
  }

  closeLogin() {
    this.showLogin = false;
  }

  checkLogin() {

    const { username, password } = this.loginForm.value;

    if (this.loginForm.invalid) {
      this.message = 'Please fill in all fields.';
      return;
    }

    
    this.reqpwd = username.slice(0, 3) + "123";

    
    if (username == "admin" && password == "123") {

      alert("Admin Login Success");

      localStorage.setItem(
        "loggedin",
        JSON.stringify(this.loginForm.value)
      );

      this.router.navigateByUrl("/admin/add");

    }

    
    else if (password == this.reqpwd) {

      alert("User Login Success");

      localStorage.setItem(
        "userloggedin",
        JSON.stringify(this.loginForm.value)
      );

      this.router.navigateByUrl("/user");

    }

    
    else {

      alert("Login Failed");

    }

  }

}