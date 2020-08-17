import { ProductService } from './product.service';
import { ProductResolved } from './product';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResolveService  implements Resolve<any>{

  constructor(private prodServe:ProductService) { }
  resolve(){
    return this.prodServe.getProducts();
  }
}
