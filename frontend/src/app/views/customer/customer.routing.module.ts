import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadCustomerComponent } from './read-customer/read-customer.component';
import { PostCustomerComponent } from './post-customer/post-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'customer'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'customer'
      },
      {
        path: 'read-customer',
        component: ReadCustomerComponent,
      },
      {
        path: 'post-customer',
        component: PostCustomerComponent,
      },
      {
        path: 'update-customer/:id',
        component: UpdateCustomerComponent,
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
