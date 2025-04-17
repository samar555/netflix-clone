import { Component } from '@angular/core';
import { HeaderComponent } from "../core/components/header/header.component";
import { BannerComponent } from "../core/components/banner/banner.component";

@Component({
  selector: 'app-dashboared',
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './dashboared.component.html',
  styleUrl: './dashboared.component.css'
})
export class DashboaredComponent {
user_name:string=localStorage.getItem("name")??"User"



}
