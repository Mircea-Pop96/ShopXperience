import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.component').then((mod) => mod.SignupComponent),
  },
  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./admin/components/dashboard/dashboard.component').then(
        (mod) => mod.DashboardComponent
      ),
  },
  {
    path: 'admin/category',
    loadComponent: () =>
      import('./admin/components/post-category/post-category.component').then(
        (mod) => mod.PostCategoryComponent
      ),
  },
  {
    path: 'admin/product',
    loadComponent: () =>
      import('./admin/components/post-product/post-product.component').then(
        (mod) => mod.PostProductComponent
      ),
  },
  {
    path: 'admin/product/:productId',
    loadComponent: () =>
      import('./admin/components/update-product/update-product.component').then(
        (mod) => mod.UpdateProductComponent
      ),
  },
  {
    path: 'admin/faq/:productId',
    loadComponent: () =>
      import(
        './admin/components/post-product-faq/post-product-faq.component'
      ).then((mod) => mod.PostProductFaqComponent),
  },
  {
    path: 'admin/post-coupon',
    loadComponent: () =>
      import('./admin/components/post-coupon/post-coupon.component').then(
        (mod) => mod.PostCouponComponent
      ),
  },
  {
    path: 'admin/coupons',
    loadComponent: () =>
      import('./admin/components/coupons/coupons.component').then(
        (mod) => mod.CouponsComponent
      ),
  },
  {
    path: 'admin/orders',
    loadComponent: () =>
      import('./admin/components/orders/orders.component').then(
        (mod) => mod.OrdersComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((mod) => mod.AdminComponent),
  },
  {
    path: 'customer',
    loadComponent: () =>
      import('./customer/customer.component').then(
        (mod) => mod.CustomerComponent
      ),
  },
  {
    path: 'customer/cart',
    loadComponent: () =>
      import('./customer/components/cart/cart.component').then(
        (mod) => mod.CartComponent
      ),
  },
  {
    path: 'customer/dashboard',
    loadComponent: () =>
      import('./customer/components/dashboard/dashboard.component').then(
        (mod) => mod.DashboardComponent
      ),
  },
  {
    path: 'customer/my_orders',
    loadComponent: () =>
      import('./customer/components/my-orders/my-orders.component').then(
        (mod) => mod.MyOrdersComponent
      ),
  },
  {
    path: 'customer/ordered_products/:orderId',
    loadComponent: () =>
      import(
        './customer/components/view-ordered-products/view-ordered-products.component'
      ).then((mod) => mod.ViewOrderedProductsComponent),
  },
  {
    path: 'customer/review/:productId',
    loadComponent: () =>
      import(
        './customer/components/review-ordered-product/review-ordered-product.component'
      ).then((mod) => mod.ReviewOrderedProductComponent),
  },
  {
    path: 'customer/product/:productId',
    loadComponent: () =>
      import(
        './customer/components/view-product-detail/view-product-detail.component'
      ).then((mod) => mod.ViewProductDetailComponent),
  },
  {
    path: 'customer/wishlist',
    loadComponent: () =>
      import(
        './customer/components/view-wish-list/view-wish-list.component'
      ).then((mod) => mod.ViewWishlistComponent),
  },
  {
    path: 'order',
    loadComponent: () =>
      import('./track-order/track-order.component').then(
        (mod) => mod.TrackOrderComponent
      ),
  },
  {
    path: 'admin/analytics',
    loadComponent: () =>
      import('./admin/components/analytics/analytics.component').then(
        (mod) => mod.AnalyticsComponent
      ),
  },
];
