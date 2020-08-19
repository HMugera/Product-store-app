import { SelectiveStrategy } from './selective-strategy.service';
import { AuthGuard } from './user/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
  imports:[
    RouterModule.forRoot([
      {path: 'welcome', component: HomeComponent},
      {
        path: 'products',
        canActivate:[AuthGuard],
        data: {prelaod: true},
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ], {preloadingStrategy: SelectiveStrategy}),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
