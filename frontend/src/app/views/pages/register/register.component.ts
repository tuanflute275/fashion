import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { GlobalConstants } from './../../../shared/global-constants';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: any = FormGroup;
  responseMessage: any;



  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      // name: [null, Validators.required, Validators.pattern(GlobalConstants.nameRegex)],
      // email: [null, Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      check: ['', Validators.required],
    })
  }

  handleSubmit() {
    let formData = this.signupForm.value;
    var data = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }
    console.log(data)
    this.userService.signup(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.router.navigate(['/login']);
    }, (error) => {
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
