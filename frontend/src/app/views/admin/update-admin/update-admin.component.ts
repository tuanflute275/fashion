import { AccountService } from 'src/app/services/account.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent {
  adminFormUpdate = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  responseMessage: any;

  constructor(private accountService: AccountService, private route: ActivatedRoute,  private router: Router) { };

  ngOnInit(): void {
    this.accountService.getOneAdmin(this.route.snapshot.params['id']).subscribe((response: any) => {
      this.adminFormUpdate = new FormGroup({
        name: new FormControl(response[0].name),
        email: new FormControl(response[0].email),
        password: new FormControl(response[0].password)
      });
    });
  }

  handleSubmit() {
    let formData = this.adminFormUpdate.value;
    let data = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }
    this.accountService.updateAdmin(this.route.snapshot.params['id'], data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.router.navigate(['/admin/read-admin']);
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
