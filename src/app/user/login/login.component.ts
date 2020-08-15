import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  pageTitle = 'Log In';
  constructor(private auth: AuthService, private route: Router) { }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.auth.login(userName, password);

      // Navigate to the Product List page after log in.
      this.route.navigate(['products']);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

  ngOnInit(): void {
  }

}
