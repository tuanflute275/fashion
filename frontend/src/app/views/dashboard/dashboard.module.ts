import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
