import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  logo = '../../../assets/images/logo.jpg';
  avatar = '../../../assets/img/avatars/avatar_admin.jpg'
  blogBig = '../../../assets/images/blogbig.jpg'
  related1 = '../../../assets/images/related1.jpg'
  related2 = '../../../assets/images/related2.jpg'

  constructor(private toastr: ToastrService, private router: Router, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    //ngx-spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
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
