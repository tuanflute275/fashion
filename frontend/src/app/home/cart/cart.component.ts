import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carts: any = [];
  logo = '../../../assets/images/logo.jpg';
  avatar = '../../../assets/img/avatars/avatar_admin.jpg'
  home1 = '../../../assets/images/home1.jpg'
  home2 = '../../../assets/images/home2.jpg'
  home3 = '../../../assets/images/home3.jpg'

  constructor(private toastr: ToastrService, private router: Router, private userService: UserService, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    //ngx-spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.carts = this.userService.getCarts()
  }
  subtotal(item: any) {
    return item.quantity * item.price
  }
  updateQuantity(idx: number, e: any) {
    let newQuantity = e.target.value
    newQuantity = newQuantity > 0 ? newQuantity : 1
    newQuantity = newQuantity <= 100 ? newQuantity : 100
    this.carts[idx].quantity = newQuantity;
    this.userService.saveCart(this.carts)
  }
  handleMinus(idx: number, quantity: number) {
    let newQtt = quantity - 1;
    newQtt = newQtt > 0 ? newQtt : 1
    newQtt = newQtt <= 100 ? newQtt : 100
    this.carts[idx].quantity = newQtt
    console.log(newQtt)
    this.userService.saveCart(this.carts)
  }
  handlePlus(idx: number, quantity: number) {
    let newQtt = quantity + 1;
    newQtt = newQtt > 0 ? newQtt : 1
    newQtt = newQtt <= 100 ? newQtt : 100
    this.carts[idx].quantity = newQtt
    console.log(newQtt)
    this.userService.saveCart(this.carts)
  }
  removeCart(idx: number) {
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
        this.carts.splice(idx, 1);
        this.userService.saveCart(this.carts)
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
    localStorage.clear()
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
