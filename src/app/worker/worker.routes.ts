import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'reservation',
        loadComponent: () => import('./reservation/reservation.page').then( m => m.ReservationPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: 'working',
        loadComponent: () => import('./working/working.page').then( m => m.WorkingPage)
      },
      {
        path: 'chat',
        children:[
          {
            path: '',
            loadComponent: () => import('./chat/menu/menu.page').then( m => m.MenuPage)
          },
          {
            path: 'discussion',
            loadComponent: () => import('./chat/discussion/discussion.page').then( m => m.DiscussionPage)
          },
        ]
      },
    ],
  },
  {
    path: 'done',
    loadComponent: () => import('./done/done.page').then( m => m.DonePage)
  },
];
