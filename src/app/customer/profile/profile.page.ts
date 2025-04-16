import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent, IonFooter,
  IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import { addIcons } from 'ionicons';
import { Location } from '@angular/common';
import {
  arrowBackOutline,
  pencil,
  walletOutline,
  starOutline,
  chevronForwardOutline,
  homeOutline,
  listOutline,
  chatbubbleOutline,
  // Icônes du menu
  personOutline,
  settingsOutline,
  helpCircleOutline,
  shieldCheckmarkOutline,
  cardOutline,
  notificationsOutline,
  documentTextOutline
} from 'ionicons/icons';
import {TabCustomerComponent} from "../../shared/tab-customer/tab-customer.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonList, IonItem, IonLabel, IonFooter, TabCustomerComponent]
})
export class ProfilePage implements OnInit {

  user = {
    name: 'Marie Rasoa',
    email: 'marie.rasoa@gmail.com',
    avatar: 'assets/images/avatar/marie-rasoa.jpg',
    totalSpent: '30 000 Ar',
    rating: 4.6
  };

  menuItems = [
    {
      title: 'Statistiques',
      icon: 'stats-chart-outline',
      route: '/statistics'
    },
    {
      title: 'Paramètres&sécurité',
      icon: 'settings-outline',
      route: '/settings'
    },
    {
      title: 'Paiement options',
      icon: 'card-outline',
      route: '/payment'
    },
    {
      title: 'Adresse',
      icon: 'location-outline',
      route: '/address'
    }
  ];

  constructor(private router:Router,private location:Location) {
    addIcons({
      arrowBackOutline,      // Icône flèche retour
      pencil,               // Icône éditer profil
      walletOutline,        // Icône porte-monnaie (dépenses)
      starOutline,         // Icône étoile vide (note)
      chevronForwardOutline, // Icône flèche menu
      homeOutline,         // Icône accueil (footer)
      listOutline,        // Icône liste (footer)
      chatbubbleOutline,  // Icône chat (footer)
      // Icônes du menu
      personOutline,
      settingsOutline,
      helpCircleOutline,
      shieldCheckmarkOutline,
      cardOutline,
      documentTextOutline,
      notificationsOutline
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  navigateTo(route: string) {

  }

  logout() {
    // Implement logout logic
    console.log('Logging out...');
    this.router.navigate(['/']);
  }

  editProfile() {
  }

}
