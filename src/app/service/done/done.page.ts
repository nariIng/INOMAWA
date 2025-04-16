import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
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
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  checkmark,
  star,
  starOutline,
  homeOutline,
  documentTextOutline,
  chatbubbleOutline
} from 'ionicons/icons';
import {TabCustomerComponent} from "../../shared/tab-customer/tab-customer.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-done',
  templateUrl: './done.page.html',
  styleUrls: ['./done.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonFooter, TabCustomerComponent]
})
export class DonePage implements OnInit {

  taskInfo = {
    workerName: 'Salomon',
    cost: '12 500 Ar',
    duration: {
      hours: 2,
      minutes: 30
    },
    rating: 4
  };

  constructor(private location: Location,private router:Router) {
    addIcons({
      arrowBackOutline,    // Icône flèche retour
      checkmark,          // Icône de validation (coche verte)
      star,               // Icône étoile pleine (notation)
      starOutline,        // Icône étoile vide (notation)
      homeOutline,        // Icône accueil (footer)
      documentTextOutline, // Icône documents (footer)
      chatbubbleOutline   // Icône chat (footer)
    });
  }

  ngOnInit() {
    this.taskInfo.workerName = history.state.reservation.technician;
  }

  goBack() {
    this.location.back();
  }

  confirm() {
    // Action à exécuter lors de la confirmation
    this.router.navigate(['/service']);
  }

}
