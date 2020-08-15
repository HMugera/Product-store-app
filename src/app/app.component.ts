import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'My Products store';

  constructor(private route: Router){}

  logOut(): void{
this.route.navigate(['/welcome'] );
  }
}
