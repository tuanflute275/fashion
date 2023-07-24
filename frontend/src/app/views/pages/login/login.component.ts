import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { GlobalConstants } from './../../../shared/global-constants';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // email:[null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  handleSubmit() {
    let formData = this.loginForm.value;
    let data = {
      email: formData.email,
      password: formData.password,
    };
    this.userService.login(data).subscribe(
      (response: any) => {
        console.log(response);

        localStorage.setItem('token', response.token);
        const user: any = jwtDecode(response.token);
        console.log(user);

        switch (user.role) {
          case 'admin':
            return this.router.navigate(['/dashboard']);
          case 'user':
            return this.router.navigateByUrl('/home');
          default:
            return this.router.navigateByUrl('/');
        }
      },
      (error) => {
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
      }
    );
    console.log(data);
  }

  developing(){
    this.toastr.error('developing !!!')
  }
}
