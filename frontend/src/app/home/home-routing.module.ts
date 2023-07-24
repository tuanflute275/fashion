import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/app/services/routeGuard/route-guard-service.service';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: HomeComponent,
  },
  {
    path: 'shop',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: ShopComponent,
  },
  {
    path: 'faq',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: FaqComponent,
  },
  {
    path: 'blog',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: BlogComponent,
  },
  {
    path: 'contact',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: ContactComponent,
  },
  {
    path: 'cart',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: CartComponent,
  },
  {
    path: 'checkout',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: CheckoutComponent,
  },
  {
    path: 'wishlish',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: WishlistComponent,
  },
  {
    path: 'productDetail/:id',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: ProductDetailComponent,
  },
  {
    path: 'blogDetail',
    canActivate: [RouteGuardService],
    data: {
      expectedRole: ['admin', 'user'],
    },
    component: BlogDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
