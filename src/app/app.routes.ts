import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.routes').then((m) => m.routes),
  },
  {
    path: 'service',
    loadChildren: () => import('./service/service.routes').then( m => m.routes)
  },
  {
    path: 'worker',
    loadChildren: () => import('./worker/worker.routes').then( m => m.routes)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.routes').then( m => m.routes)
  }
];
