import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'My Products store';

  constructor(private route: Router,private auth: AuthService){}


  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }

  get userName(): string {
    if (this.auth.currentUser) {
      return this.auth.currentUser.userName;
    }
    return '';
  }
  logOut(): void{
    this.auth.logout();
    console.log('Log out');
    this.route.navigateByUrl('/welcome');
  }
}
