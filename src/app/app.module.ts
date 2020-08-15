import { AppRoutingModule } from './app.routing.module';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from '../app/product/product-data';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

/* Feature Modules */
import { ProductModule } from '../app/product/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from '../app/message/message.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    UserModule,
    ProductModule,
    MessageModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
