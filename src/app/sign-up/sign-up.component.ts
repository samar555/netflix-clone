
import { Component, inject } from '@angular/core';
import { BackgoundComponent } from '../backgound/backgound.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleSignInComponent } from "../google-sign-in/google-sign-in.component";

@Component({
  selector: 'app-sign-up',
  imports: [BackgoundComponent, FormsModule, GoogleSignInComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  name: string = '';
  gender: string = '';
  email: string = '';
  password: string = '';
  toggleAlert: boolean = false;
  error:boolean=false;
  saveData() {
    if(this.name.length==0){
      this.error=true;
    } else if(this.gender.length==0){
      this.error=true;
    }
    else if(this.email.length==0){
      this.error=true;
    }
   else if(this.password.length==0){
    this.error=true;
    }
    else{
    localStorage.setItem('name', this.name);
    localStorage.setItem('gender', this.gender);
    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
    this.toggleAlert = true;
    this.error=false;
  }
  }
  closeAlert() {
    this.toggleAlert = false;
  }
  
}
