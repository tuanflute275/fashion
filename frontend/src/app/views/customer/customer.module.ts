import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer.routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ReadCustomerComponent } from './read-customer/read-customer.component';
import { PostCustomerComponent } from './post-customer/post-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';


@NgModule({
  imports: [
    CustomerRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    ReadCustomerComponent,
    PostCustomerComponent,
    UpdateCustomerComponent
  ]
})
export class CustomerModule {
}
