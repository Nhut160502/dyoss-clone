import DefaultLayout from './auth/layouts/DefaultLayout'
import {
  EditCategory,
  EditCollection,
  EditProduct,
  ListCategory,
  ListCollection,
  ListProduct,
  StoreCategory,
  StoreCollection,
  StoreProduct,
} from './auth/pages'
import Dashboard from './auth/pages/Dashboard'
import Default from './customer/layouts/Default'
import {
  Category,
  Home,
  Products,
  Product,
  Gallery,
  Blogs,
  Checkout,
  Account,
} from './customer/pages'

export const publicRoutes = [
  {
    path: '/',
    element: Home,
    layout: Default,
  },
  {
    path: '/category/:slug',
    element: Category,
    layout: Default,
  },
  {
    path: '/shop',
    element: Products,
    layout: Default,
  },
  {
    path: '/product/:slug',
    element: Product,
    layout: Default,
  },
  {
    path: '/gallery',
    element: Gallery,
    layout: Default,
  },
  {
    path: '/blog',
    element: Blogs,
    layout: Default,
  },
  {
    path: '/my-account',
    element: Account,
    layout: Default,
  },
  {
    path: '/checkout',
    element: Checkout,
    layout: Default,
  },
]
export const privateRouters = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: Dashboard,
    layout: DefaultLayout,
  },

  //Category

  {
    path: '/dashboard/category',
    name: 'Danh Sách Danh Mục',
    element: ListCategory,
    layout: DefaultLayout,
  },

  {
    path: '/dashboard/category/store',
    name: 'Thêm Danh Mục',
    element: StoreCategory,
    layout: DefaultLayout,
  },

  {
    path: '/dashboard/category/edit/data?=:slug',
    name: 'Chỉnh Sửa Danh Mục',
    element: EditCategory,
    layout: DefaultLayout,
  },

  // Collection

  {
    path: '/dashboard/collection',
    name: 'Danh Sách Bộ Sưu Tập',
    element: ListCollection,
    layout: DefaultLayout,
  },

  {
    path: '/dashboard/collection/store',
    name: 'Thêm Bộ Sưu Tập',
    element: StoreCollection,
    layout: DefaultLayout,
  },

  {
    path: '/dashboard/collection/edit/data?=:slug',
    name: 'Chỉnh Sửa Bộ Sưu Tập',
    element: EditCollection,
    layout: DefaultLayout,
  },

  // Product

  {
    path: '/dashboard/product/store',
    name: 'Thêm Sản Phẩm',
    element: StoreProduct,
    layout: DefaultLayout,
  },

  {
    path: '/dashboard/product/edit/data?=:slug',
    name: 'Chỉnh Sửa Sản Phẩm',
    element: EditProduct,
    layout: DefaultLayout,
  },

  {
    path: '/dashboard/product',
    name: 'Danh Sách Sản Phẩm',
    element: ListProduct,
    layout: DefaultLayout,
  },
]
