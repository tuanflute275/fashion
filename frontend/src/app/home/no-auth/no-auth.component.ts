import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-no-auth',
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.scss'],
})
export class NoAuthComponent {
  page: number = 1;
  products: any = [];
  logo = '../../../assets/images/logo.jpg';
  avatar = '../../../assets/img/avatars/avatar_admin.jpg'
  home = [
    {
      id: 0,
      src: '../../../assets/images/home1.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      id: 1,
      src: '../../../assets/images/home2.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      src: '../../../assets/images/home3.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }

  ]
  home1 = '../../../assets/images/home1.jpg'
  home2 = '../../../assets/images/home2.jpg'
  home3 = '../../../assets/images/home3.jpg'

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor(private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }

  loginPls() {
    this.toastr.warning('please log in !');
  }

  search() {
    this.toastr.success('ok')
  }
  logout() {
    localStorage.removeItem("token");
    this.toastr.success('Logout Successfully !')
    this.router.navigate(['/login'])
  }
}
