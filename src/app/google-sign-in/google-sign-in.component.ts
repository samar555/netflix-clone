declare var google: any;
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-sign-in',
  imports: [],
  templateUrl: './google-sign-in.component.html',
  styleUrl: './google-sign-in.component.css'
})
export class GoogleSignInComponent {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '531121168764-fj0qmf042utb4q601id0dt2ojmdpe6ej.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp)
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',

      width: 280,

    })
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any) {
    if (response) {
      //decode the token
      const payLoad = this.decodeToken(response.credential);
      //store in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
      //navigate to home/browse
      this.router.navigate(['/dashboared'])
    }
  }
}
