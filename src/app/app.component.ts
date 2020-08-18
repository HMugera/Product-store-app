import { MessageService } from 'src/app/message/message.service';
import { slideInAnimation } from './app.animation';
import { AuthService } from './user/auth.service';
import { Router,Event,NavigationStart,NavigationEnd,NavigationError,NavigationCancel} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  loading= false;
  pageTitle = 'My Products store';

  constructor(private route: Router,
    private auth: AuthService,
    private messageServe:MessageService){

    route.events.subscribe((routerEvent:Event)=>{
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent:Event): void{
    if (routerEvent instanceof NavigationStart){
      this.loading = true;
    }
    if(routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel
      || routerEvent instanceof NavigationError){
        this.loading= false;
      }
  }


  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn;
  }

  get userName(): string {
    if (this.auth.currentUser) {
      return this.auth.currentUser.userName;
    }
    return '';
  }

  get isMessageDisplayed(): boolean{
    return this.messageServe.isDisplayed;
  }

displayMessages(): void{
  this.route.navigate([{outlets: { popup:['message']}}]);
  this.messageServe.isDisplayed = true;
}

hideMessages(): void{
  this.messageServe.isDisplayed = false;
  this.route.navigate([{outlets: { popup : null}}])
}

  logOut(): void{
    this.auth.logout();
    console.log('Log out');
    this.route.navigateByUrl('/welcome');
  }
}
