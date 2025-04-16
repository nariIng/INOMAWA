import { Component, OnInit } from '@angular/core';
import {IonBadge, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonToolbar} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import {
  homeOutline,
  documentTextOutline,
  chatbubbleOutline
} from 'ionicons/icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab-worker',
  templateUrl: './tab-worker.component.html',
  styleUrls: ['./tab-worker.component.scss'],
    imports: [
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonIcon,
        IonBadge,
        IonToolbar
    ]
})
export class TabWorkerComponent  implements OnInit {

  constructor(private router:Router) {
    addIcons({
      homeOutline,
      documentTextOutline,
      chatbubbleOutline
    });
  }

  ngOnInit() {}

  navigateToHome() {
    this.router.navigateByUrl('/worker');
  }

  navigateToReservation() {
    this.router.navigateByUrl('/worker/reservation');
  }

  navigateToChat() {
    this.router.navigateByUrl('/worker/chat');
  }
}
