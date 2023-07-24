import { AccountService } from './../../../services/account.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-read-customer',
  templateUrl: './read-customer.component.html',
  styleUrls: ['./read-customer.component.scss']
})
export class ReadCustomerComponent {
  page:number = 1;
  data: any;
  customerFormSearch: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  responseMessage: any;
  constructor(private accountService: AccountService, private router: Router) {
    this.userData();
  };

  ngOnInit() { }

  getFullData() {
    this.data = this.userData()
  }

  userData() {
    this.accountService.getUser().subscribe((response: any) => {
      this.data = response;
      console.log(this.data);
    }, (error) => {
      console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError
      }
    })
  }

  submitSearch() {
    let data = this.customerFormSearch.value.name
    this.accountService.searchUser(data).subscribe((response: any) => {
        this.data=response;
    })
    this.customerFormSearch = new FormGroup({
      name: new FormControl('')
    });
  }

  onEditCategory(id: string) {
    this.data.find( (p: { id: any; }) => {return p.id === id})
    this.router.navigate([`/adm/customer/update-customer/${id}`]);
  }

  onDeleteCategory(id: number) {
    if(confirm('Are you sure to delete record ?'))
    this.accountService.deleteUser(id).subscribe(response => {
      this.accountService.getUser().subscribe(data=>{
        this.data = data
      })
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError
      }
    }
    )
  }
}
