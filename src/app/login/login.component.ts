import { Component } from '@angular/core';
import { BackgoundComponent } from "../backgound/backgound.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [BackgoundComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  
}
