import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./index/index.page').then((m) => m.IndexPage),
      },
      {
        path: 'login/user',
        loadComponent: () =>
          import('./login-user/login-user.page').then((m) => m.LoginUserPage),
      },
      {
        path: 'login/worker',
        loadComponent: () =>
          import('./login-worker/login-worker.page').then((m) => m.LoginWorkerPage),
      },
      {
        path: 'inscription-customer',
        loadComponent: () => import('./inscription-customer/inscription-customer.page').then( m => m.InscriptionCustomerPage)
      }
    ],
  }
];
