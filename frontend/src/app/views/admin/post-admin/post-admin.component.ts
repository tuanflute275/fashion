import { GlobalConstants } from './../../../shared/global-constants';
import { AccountService } from 'src/app/services/account.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.scss']
})
export class PostAdminComponent {
  adminFormPost: any = FormGroup;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private router: Router) { };
  ngOnInit(): void {
    this.adminFormPost = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  handleSubmit() {
    let formData = this.adminFormPost.value;
    let data = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }
    this.accountService.postAdmin(data).subscribe((response: any) => {
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
  }
}
