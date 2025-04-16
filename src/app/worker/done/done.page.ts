import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {NavController} from "@ionic/angular";
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  checkmark,
  star,
  starOutline,
  homeOutline,
  listOutline,
  chatbubbleOutline
} from 'ionicons/icons';
import {TabWorkerComponent} from "../../shared/tab-worker/tab-worker.component";

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonFooter, TabWorkerComponent]
})
export class DonePage implements OnInit {

  taskInfo = {
    clientName: 'Marie Rasoa',
    duration: {
      hours: 2,
      minutes: 30
    },
    earnings: '12 500 Ar',
    rating: 4
  };

  constructor(private navCtrl: NavController) {
    addIcons({
      arrowBackOutline,    // Icône flèche retour
      checkmark,          // Icône de validation (coche)
      star,               // Icône étoile pleine (notation)
      starOutline,        // Icône étoile vide (notation)
      homeOutline,        // Icône accueil (footer)
      listOutline,        // Icône liste (footer)
      chatbubbleOutline   // Icône chat (footer)
    });
  }

  ngOnInit() {
    this.taskInfo.clientName = history.state.reservation.client.name;
  }

  goBack() {
    this.navCtrl.back();
  }

  confirm() {
    // Action à exécuter lors de la confirmation
    this.navCtrl.navigateRoot('/worker');
  }

}
