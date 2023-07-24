import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2'
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  page: number = 1;
  check: boolean = false;
  products: any = [];
  cats: any = [];
  carts: any = this.userService.getCarts();
  productFormSearch: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  logo = '../../../assets/images/logo.jpg';
  avatar = '../../../assets/img/avatars/avatar_admin.jpg'
  home1 = '../../../assets/images/home1.jpg'
  home2 = '../../../assets/images/home2.jpg'
  home3 = '../../../assets/images/home3.jpg'


  constructor(private toastr: ToastrService,
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) {
    this.dataProduct()
    this.dataCategory()
  }
  ngOnInit(): void {
    //ngx-spinner
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  dataProduct() {
    this.productService.getProduct().subscribe(response => {
      console.log("products", response)
      this.products = response;
    })
  }
  dataCategory() {
    this.categoryService.getCategory().subscribe(response => {
      console.log('categories', response);
      this.cats = response;
    })
  }
  submitSearch() {
    let data = this.productFormSearch.value.name
    this.productService.searchProduct(data).subscribe((response: any) => {
      this.products = response;
    })
    this.productFormSearch = new FormGroup({
      name: new FormControl('')
    });
  }
  getCategoryById(id: any) {
    console.log(id);
    this.productService.getByCategory(id).subscribe(response => {
      console.log('data by id', response);
      this.products = response;
    })
  }
  getAllData() {
    this.products = this.dataProduct();
  }
  getDetailProduct(id: any) {
    console.log(id);
    this.router.navigate([`/home/productDetail/${id}`]);
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
