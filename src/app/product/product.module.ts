import { ProductEditGuard } from './product-edit/product-edit.guard';
import { AuthGuard } from './../user/auth.guard';
import { ResolveService } from './resolve.service';
import { ProductResolverService } from './product-resolver.service';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags/product-edit-tags.component';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([

        // path: 'products',
        // canActivate:[AuthGuard],
        // children: [
          //group routes under a component-less route
          {
            path: '', component: ProductListComponent,
            resolve: { products: ResolveService }
          },
          {
            path: ':id', component:
              ProductDetailComponent, resolve: { resolvedData: ProductResolverService }
          },
          {
            path: ':id/edit', canDeactivate:[ProductEditGuard],component:
              ProductEditComponent, resolve: { resolvedData: ProductResolverService },
            children: [
              { path: '', pathMatch: 'full', redirectTo: 'info' },
              { path: 'info', component: ProductEditInfoComponent },
              { path: 'tags', component: ProductEditTagsComponent },
            ]
          },
            ])
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductEditTagsComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditComponent,
  ],

})
export class ProductModule { }
