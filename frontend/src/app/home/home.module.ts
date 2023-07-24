import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from "ngx-spinner";

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  imports: [
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CarouselModule,
    MdbCheckboxModule,
    MatSlideToggleModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  declarations: [
    NoAuthComponent,
    HomeComponent,
    ContactComponent,
    WishlistComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    BlogComponent,
    FaqComponent,
    ProductDetailComponent,
    BlogDetailComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class HomeModule { }
