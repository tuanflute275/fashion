import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadProductComponent } from './read-product/read-product.component';
import { PostProductComponent } from './post-product/post-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'product'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'product'
      },
      {
        path: 'read-product',
        component: ReadProductComponent,
      },
      {
        path: 'post-product',
        component: PostProductComponent,
      },
      {
        path: 'update-product/:id',
        component: UpdateProductComponent,
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
