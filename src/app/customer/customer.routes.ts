import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'reservations',
        loadComponent: () =>
          import('./reservation/reservation.page').then((m) => m.ReservationPage),
      }
    ],
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
      }
    ]
  }
];
