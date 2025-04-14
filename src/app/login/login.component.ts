import { Component, inject } from '@angular/core';
import { BackgoundComponent } from "../backgound/backgound.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [BackgoundComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  router = inject(Router);
  error1: boolean = false;
  error2: boolean = false;
  check() {
    const storeEmail: string = localStorage.getItem("email") ?? "";
    const storePassword: string = localStorage.getItem("password") ?? "";
    if (storeEmail.length == 0) {
      this.router.navigate(["/sign-up"]);
    } else {
      if (this.email != storeEmail) {
        console.log(storeEmail)
        console.log(this.email)
        this.error1 = true;
        this.email=""
      }
      if (this.password != storePassword) {
        console.log(storePassword)
        console.log(this.password)
        this.error2 = true;
        this.password =""
      }
      if (this.email == storeEmail && this.password == storePassword) {
        this.router.navigate(["/dashboared"])
      }

    }
  }
  closeAlert1(){
    this.error1=false;
  }
  closeAlert2(){
    this.error2=false;
  }
}
