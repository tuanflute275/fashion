import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  userFormUpdate = new FormGroup({
    status: new FormControl('')
  });
  responseMessage: any;

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) { };

  ngOnInit(): void {
    this.accountService.getStatus(this.route.snapshot.params['id']).subscribe((response: any) => {
      console.warn('response =>', response)
      this.userFormUpdate = new FormGroup({
        status: new FormControl(response[0].status)
      });
    });
  }
  handleSubmit() {
    let formData = this.userFormUpdate.value;
    let data = {
      status: formData.status
    }
    this.accountService.updateStatus(this.route.snapshot.params['id'], data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.router.navigate(['/adm/customer/read-customer']);
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError
      }
    }
    )
    console.log(data)
  }
}
