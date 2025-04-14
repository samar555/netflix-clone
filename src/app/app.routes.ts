import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboaredComponent } from './dashboared/dashboared.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },{
    path:'forget-password'
    , 
    loadComponent:()=> import('./forgot-password/forgot-password.component').then((c)=>c.ForgotPasswordComponent)
  },{
    path:'sign-up'
    , 
    loadComponent:()=> import('./sign-up/sign-up.component').then((c)=>c.SignUpComponent)
  }
  ,{
    path:'dashboared'
    , 
    loadComponent:()=> import('./dashboared/dashboared.component').then((c)=>c.DashboaredComponent)
  }
];
