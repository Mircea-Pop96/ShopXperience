import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.component').then((mod) => mod.SignupComponent),
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
];
