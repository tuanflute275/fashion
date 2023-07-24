import { RouteGuardService } from './services/routeGuard/route-guard-service.service';
import { ForgotpasswordComponent } from './views/pages/forgotpassword/forgotpassword.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { NoAuthComponent } from './home/no-auth/no-auth.component';

const routes: Routes = [
  {
    path: '',
    component:NoAuthComponent
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./views/admin/admin.module').then((m) => m.AdminModule),
        canActivate: [RouteGuardService],
        data: {
          expectedRole: ['admin'],
        },
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [RouteGuardService],
        data: {
          expectedRole: ['admin'],
        },
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./views/category/category.module').then(
            (m) => m.CategoryModule
          ),
        canActivate: [RouteGuardService],
        data: {
          expectedRole: ['admin'],
        },
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./views/product/product.module').then((m) => m.ProductModule),
        canActivate: [RouteGuardService],
        data: {
          expectedRole: ['admin'],
        },
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./views/customer/customer.module').then(
            (m) => m.CustomerModule
          ),
        canActivate: [RouteGuardService],
        data: {
          expectedRole: ['admin'],
        },
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  {
    path: 'forgotPassword',
    component: ForgotpasswordComponent,
    data: {
      title: 'forgotPassword Page',
    },
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500',
    },
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      enableTracing: true,
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
