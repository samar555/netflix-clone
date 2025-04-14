import { Component } from '@angular/core';
import { BackgoundComponent } from '../backgound/backgound.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [BackgoundComponent, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  name: string = '';
  gender: string = '';
  email: string = '';
  password: string = '';
toggleAlert:boolean=false;
  saveData() {
    localStorage.setItem('name', this.name);
    localStorage.setItem('gender', this.gender);
    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
    this.toggleAlert=true;
  }
  closeAlert(){
    this.toggleAlert=false;
  }
}
