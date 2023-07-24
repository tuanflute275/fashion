import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  heart: any = 1;
  logo = '../../../assets/images/logo.jpg';
  avatar = '../../../assets/img/avatars/avatar_admin.jpg'

  constructor(private toastr: ToastrService, private router: Router, private productService: ProductService, private userService: UserService) {}

  getCount() {
    this.productService.getCountFavorite(this.userService.getAccountInfo().id).subscribe(response => {
      this.heart = response
      console.log(this.heart)
    })
    console.log(this.userService.getAccountInfo().id)
  }
  search() {
    this.toastr.error('developing !!');
  }
  upload() {
    this.toastr.error('developing !!');
  }
  logout() {
    localStorage.removeItem("token");
    this.toastr.success('Logout Successfully !')
    this.router.navigate(['/login'])
  }
}
