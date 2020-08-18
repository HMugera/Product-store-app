import { AuthService } from './auth.service';
import { Injectable, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private route: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn(state.url);
  }


  checkLoggedIn(url: string): boolean{
    if (this.authservice.isLoggedIn){
      return true;
    }
    this.authservice.redirectUrl = url;
    this.route.navigate(['/login']);
    return false;
  }

}
