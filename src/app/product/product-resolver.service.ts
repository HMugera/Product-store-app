import { catchError, map } from 'rxjs/operators';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { ProductResolved, Product } from './product';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable({
  providedIn: 'root'

})
export class ProductResolverService implements Resolve<ProductResolved> {

  constructor(private productService: ProductService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = 'Product id was not a number: ${id}';
      console.error(message);
      return of({ product: null, error: message });
      //print out message/return false/anvigate to error page
    }
    return this.productService.getProduct(+id)
      .pipe(
        map(product => ({ product: product })),
        catchError(error => {
          const message = `Retrival error: ${error}`;
          console.log(message);
          return of({ product: null, error: message })

        })


      );




  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productsUrl)
  //     .pipe(
  //       tap(data => console.log(JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }
      // return this.productService.getProducts().pipe(
      //   map(product => ({ product: product })),
      //   catchError(error => {
      //     const message = `Retrival error: ${error}`;
      //     console.log(message);
      //     return of({ product: null, error: message })

      //   })
      // )
  }
}
