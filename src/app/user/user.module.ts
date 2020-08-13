import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
       SharedModule
  ],
  declarations: [LoginComponent],

})
export class UserModule { }
