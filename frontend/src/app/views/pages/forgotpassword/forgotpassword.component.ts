import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { GlobalConstants } from './../../../shared/global-constants';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword: any = FormGroup;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.forgotPassword = this.formBuilder.group({
      // email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]]
      email: ['', [Validators.required]]
    })
  }
  handleSubmit() {
    let formData = this.forgotPassword.value;
    let data = {
      email:formData.email
    }
    this.userService.forgotPassword(data).subscribe((response: any)=>{
      this.responseMessage = response?.message;
      this.router.navigate(['/#/login']);
    },(error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError
      }
    }
    )
    console.log(data);
  }
}
