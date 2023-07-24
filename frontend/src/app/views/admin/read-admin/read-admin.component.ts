import { GlobalConstants } from './../../../shared/global-constants';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-read-admin',
  templateUrl: './read-admin.component.html',
  styleUrls: ['./read-admin.component.scss']
})
export class ReadAdminComponent {
  page:number = 1;
  data: any;
  adminFormSearch: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  responseMessage: any;
  constructor(private accountService: AccountService, private router: Router) {
    this.adminData();
  };

  ngOnInit() { }

  getFullData() {
    this.data = this.adminData()
  }

  adminData() {
    this.accountService.getAdmin().subscribe((response: any) => {
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
    let data = this.adminFormSearch.value.name
    this.accountService.searchAdmin(data).subscribe((response: any) => {
      this.data = response;
    })
    this.adminFormSearch = new FormGroup({
      name: new FormControl('')
    });
  }

  onEditCategory(id: string) {
    this.data.find( (p: { id: any; }) => {return p.id === id})
    this.router.navigate([`/admin/update-admin/${id}`]);
  }

  onDeleteCategory(id: number) {
    if(confirm('Are you sure to delete record ?'))
    this.accountService.deleteUser(id).subscribe(response => {
      this.accountService.getAdmin().subscribe(data=>{
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
