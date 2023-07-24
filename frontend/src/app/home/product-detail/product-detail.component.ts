import { ProductService } from 'src/app/services/product.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  carts: any = this.userService.getCarts();
  productDetail: any;
  perCentProduct: any;
  logo = '../../../assets/images/logo.jpg';
  avatar = '../../../assets/img/avatars/avatar_admin.jpg'
  home1 = '../../../assets/images/home1.jpg'
  home2 = '../../../assets/images/home2.jpg'
  home3 = '../../../assets/images/home3.jpg'

  Likes = [
    { src: '../../../assets/images/like4.jpg', title: 'Black Leather Hand Bag', price: '200' },
    { src: '../../../assets/images/like3.jpg', title: 'Black Leather Belt', price: '150' },
    { src: '../../../assets/images/like1.jpg', title: 'Rayban Sunglasses', price: '280' },
    { src: '../../../assets/images/like2.jpg', title: 'Grey Stylish Cap', price: '320' },
  ]

  constructor(private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private productSeRvice: ProductService,
    private userService: UserService,
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit(): void {
    //ngx-spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    let id = this.route.snapshot.params['id'];
    this.productSeRvice.getById(id).subscribe(response => {
      this.productDetail = response;
      console.log('productDetail', this.productDetail)

      if (response.sale_price > 0) {
        this.perCentProduct = 100 - ((response.sale_price / response.price) * 100);
      } else {
        this.perCentProduct = 0
      }
    })
  }

  /*
  percentProduct = 100 - ((sale_price / price) * 100)

  */

  onFavorite(id: number) {
    let account_id = this.userService.getAccountInfo().id
    console.log(account_id)
    this.productService.postFavorite({ product_id: id, account_id: account_id }).subscribe(response => {
      console.log(response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      })
    })
  }
  onAddToCart(product: any) {
    let idx = this.carts.findIndex((item: any) => item.id === product.id)
    console.log(product)
    if (idx >= 0) {
      this.carts[idx].quantity += 1;
    } else {

      let cartItem: any = {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.sale_price ? product.sale_price : product.price,
        quantity: 1,
        subtotal: function () {
          return this.price * this.quantity
        }
      }
      Swal.fire(
        '',
        'Add to cart successfully !',
        'success'
      )
      this.carts.push(cartItem)
    }
    //save storage
    this.userService.saveCart(this.carts)
    console.log(this.carts);

  }
  search() {
    this.toastr.error('Đang phát triển !')
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
