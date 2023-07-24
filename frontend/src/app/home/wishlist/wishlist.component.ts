import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  favorites: any = [];
  logo = '../../../assets/images/logo.jpg';
  avatar = '../../../assets/img/avatars/avatar_admin.jpg'
  home1 = '../../../assets/images/home1.jpg'
  home2 = '../../../assets/images/home2.jpg'
  home3 = '../../../assets/images/home3.jpg'

  constructor(private toastr: ToastrService,
    private router: Router,
    private productService: ProductService,
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit(): void {
    //ngx-spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.getAllFavorite()
  }
  getAllFavorite() {
    this.productService.getFavorite(this.userService.getAccountInfo().id).subscribe(response => {
      console.log("favorite", response)
      this.favorites = response
    })
  }
  removeFavorite(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.productService.deleteFavorite(this.userService.getAccountInfo().id, id).subscribe(response => {
          console.log(response)
          this.getAllFavorite()
        })
      }
    })
  }

  search() {
    alert('đây là trang user đăng nhập !')
  }
  upload() {
    this.toastr.error('Đang phát triển !')
  }
  logout() {
    localStorage.removeItem("token");
    this.toastr.success('Logout Successfully !')
    this.router.navigate(['/login'])
  }

  // scroll to top
  isShow!: boolean;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
