import { ProductResolved } from './../product';
import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;
  constructor(private productService: ProductService,
    private route: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const resolvedData :ProductResolved =this.activatedRoute.snapshot.data[ 'resolvedData']
    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.product)
    // const id = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.getProduct(id);
  }
  // getProduct(id: number): void {
  //   this.productService.getProduct(id).subscribe({
  //     next: product => this.onProductRetrieved(product),
  //     error: err => this.errorMessage = err
  //   });
  // }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

//   onBack(): void{
// this.route.navigate(['/products']);

//   }
  onEdit(id: number): void{
this.route.navigate(['/products', this.product.id, 'edit']);
  }
}
