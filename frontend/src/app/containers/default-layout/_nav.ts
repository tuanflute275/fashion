import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cilHome' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Admin'
  },

  {
    name: 'Account Admin',
    url: '/admin/read-admin',
    iconComponent: { name: 'cilPuzzle' }
  },
  {
    name: 'Category',
    url: '/category/read-category',
    iconComponent: { name: 'cilPuzzle' },
    // children: [
    //   {
    //     name: 'Read Category',
    //     url: '/category/read-category'
    //   },
    //   {
    //     name: 'Post Category',
    //     url: '/category/post-category'
    //   },
    //   {
    //     name: 'Update Category',
    //     url: '/category/update-category'
    //   },
    // ]
  },
  {
    name: 'Product',
    url: '/product/read-product',
    iconComponent: { name: 'cilPuzzle' },
    // children: [
    //   {
    //     name: 'Read Product',
    //     url: '/product/read-product'
    //   },
    //   {
    //     name: 'Post Product',
    //     url: '/product/post-product'
    //   },
    //   {
    //     name: 'Update Product',
    //     url: '/product/update-product'
    //   },
    // ]
  },
  {
    name: 'Customer',
    url: '/customer/read-customer',
    iconComponent: { name: 'cilPuzzle' }
  },
  {
    name: 'Setting',
    iconComponent: { name: 'cilPuzzle' },
    children: [
      {
        name: 'login',
        url: '/login'
      },
      {
        name: 'register',
        url: '/register'
      },
      {
        name: '500',
        url: '/500'
      },
      {
        name: '404',
        url: '/404'
      },
    ]
  },
];
