import { GlobalConstants } from '../../shared/global-constants';
import { AuthService } from '../auth-service.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  errors: any;

  constructor(private router: Router, private auth: AuthService, private toastr: ToastrService) { }

  // cos ther kich hoat
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let d = route.data;
    let expectedRoleArray = d['expectedRole'];
    console.log(expectedRoleArray);

    const token: any = localStorage.getItem('token');
    console.log(token);

    if (!token) {
      this.toastr.error('No permisson granted !!!');
    }
    var tokenPayload: any;
    try {
      tokenPayload = jwt_decode(token);
      console.log(tokenPayload);
    } catch (e) {
      localStorage.clear();
    }

    let checkRole = false;
    console.log(expectedRoleArray);

    if (expectedRoleArray.length > 0) {
      for (let i = 0; i < expectedRoleArray.length; i++) {
        if (expectedRoleArray[i] == tokenPayload.role) {
          checkRole = true;
          break;
        }
      }
    } else {
      checkRole = true;
    }
    console.log(checkRole);

    if (tokenPayload.role == 'user' || tokenPayload.role == 'admin') {
      if (this.auth.isAuthenticated() && checkRole) {
        return true;
      }
      (this.errors = GlobalConstants.unauthorized), GlobalConstants.error;
      this.toastr.error('No permisson granted !!!');
      return false;
    } else {
      this.toastr.error('No permisson granted !!!');
      localStorage.clear();
      return false;
    }
  }
}
