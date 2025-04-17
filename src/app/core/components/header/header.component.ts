import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input({required:true}) userName:string=""
menus:string[]=["Home","TV Shows","Views & Popular","My List","Browse By Language"]

}
