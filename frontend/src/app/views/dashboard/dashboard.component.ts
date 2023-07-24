import { AccountService } from 'src/app/services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/shared/global-constants';


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  responseMessage: any;
  adminCountData: any;
  userCountData: any;
  categoryCountData: any;
  productCountData: any;

  constructor(private accountService: AccountService, private router: Router) {
    this.adminCount(),
    this.userCount(),
    this.categoryCount(),
    this.productCount()
  };

  ngOnInit(): void { }

  adminCount() {
    this.accountService.getCountAdmin().subscribe((response: any) => {
      console.log('adminCount',response);
      this.adminCountData = response[0];
    })
  }
  userCount() {
    this.accountService.getCountUser().subscribe((response: any) => {
      console.log('userCount', response);
      this.userCountData = response[0];
    })
  }
  categoryCount() {
    this.accountService.getCountCategory().subscribe((response: any) => {
      console.log('categoryCount',response);
      this.categoryCountData = response[0];
    })
  }
  productCount() {
    this.accountService.getCountProduct().subscribe((response: any) => {
      console.log('productCount',response);
      this.productCountData = response[0];
    })
  }
}
