import {Component, NgModule, OnInit} from '@angular/core';
import {IonBadge, IonIcon, IonTabBar, IonTabButton, IonTabs, IonToolbar} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import { addIcons } from 'ionicons';
import {
  homeOutline,
  documentTextOutline,
  chatbubbleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tab-customer',
  templateUrl: './tab-customer.component.html',
  styleUrls: ['./tab-customer.component.scss'],
  imports: [
    IonBadge,
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonToolbar
  ]
})
export class TabCustomerComponent  implements OnInit {

  constructor(private router:Router) {
    addIcons({
      homeOutline,
      documentTextOutline,
      chatbubbleOutline
    });
  }

  ngOnInit() {}

  navigateToHome() {
    this.router.navigateByUrl('/service');
  }

  navigateToReservation() {
    this.router.navigateByUrl('/customer/reservations');
  }

  navigateToChat() {
    this.router.navigateByUrl('/customer/chat');
  }
}
