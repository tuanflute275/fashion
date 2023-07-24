import { ProductService } from 'src/app/services/product.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // cartCount: number = this.userService.getCarts().length;
  page: number = 1;
  mens: any = [];
  products: any = [];
  carts: any = this.userService.getCarts();
  account: any;
  logo = '../../../assets/images/logo.jpg';
  home1 = '../../../assets/images/home1.jpg'
  home2 = '../../../assets/images/home2.jpg'
  home3 = '../../../assets/images/home3.jpg'

  cardTrending = [
    { src: '../../assets/images/collection1.jpg', alt: 'image', desc: 'Solid Crop Top' },
    { src: '../../assets/images/collection2.jpg', alt: 'image', desc: 'Denim Jacket Outfits' },
    { src: '../../assets/images/collection3.jpg', alt: 'image', desc: 'Casual Outfits' },
  ]
  bannerOne = [
    { src: '../../assets/images/info-banner1.jpg', alt: 'image', headingT: "Women's'", headingB: 'Collections', priceSale: '50%', text: 'Off' },
    { src: '../../assets/images/info-banner2.jpg', alt: 'image', headingT: "Men's", headingB: 'Collections', priceSale: '30%', text: 'Off' }
  ]
  instagram = [
    { id: 1, src: '../../assets/images/1.jpg', alt: 'image' },
    { id: 2, src: '../../assets/images/2.jpg', alt: 'image' },
    { id: 3, src: '../../assets/images/3.jpg', alt: 'image' },
    { id: 4, src: '../../assets/images/4.jpg', alt: 'image' },
    { id: 5, src: '../../assets/images/5.jpg', alt: 'image' },
    { id: 6, src: '../../assets/images/6.jpg', alt: 'image' },
    { id: 7, src: '../../assets/images/7.jpg', alt: 'image' },
    { id: 8, src: '../../assets/images/8.jpg', alt: 'image' },
  ]
  blogs = [
    { src: '../../assets/images/blog-1.jpg', title: "5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day" },
    { src: '../../assets/images/blog-2.jpg', title: "5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day" },
    { src: '../../assets/images/blog-3.jpg', title: "5 Sweet Outfit Ideas You'll Wear Well Beyond Valentine's Day" },
  ]


  constructor(private toastr: ToastrService, private router: Router, private productService: ProductService, private userService: UserService, private spinner: NgxSpinnerService) {
    this.dataProduct()
    this.dataMen()
  }
  ngOnInit(): void {
    //ngx-spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    let storage = localStorage.getItem('token')
    if (storage) {
      this.account = JSON.parse(storage)
    }
  }
  dataProduct() {
    this.productService.getTop().subscribe(response => {
      this.products = response;
      console.log('response', response)
    })
  }
  dataMen() {
    this.productService.getTop().subscribe(response => {
      this.mens = response;
      console.log('response', response)
    })
  }
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
