import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {
  IonButton,
  IonButtons,
  IonContent, IonFooter,
  IonHeader,
  IonIcon, IonItem, IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  pencil,
  walletOutline,
  listOutline,
  star,
  pricetagOutline,
  chevronForwardOutline,
  homeOutline,
  documentTextOutline,
  chatbubbleOutline,
  // Icônes du menu
  personOutline,
  settingsOutline,
  helpCircleOutline,
  shieldCheckmarkOutline,
  cardOutline,
  notificationsOutline
} from 'ionicons/icons';
import {TabWorkerComponent} from "../../shared/tab-worker/tab-worker.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonList, IonItem, IonLabel, IonFooter, TabWorkerComponent]
})
export class ProfilePage implements OnInit {

  provider = {
    name: 'RAKOTO Salomon',
    avatar: 'assets/images/avatar/rakoto-salomon.jpg',
    totalEarnings: '260000 Ar',
    totalServices: '23',
    rating: 4.5,
    hourlyRate: '5 000 Ar/h'
  };

  menuItems = [
    {
      title: 'Profil public',
      icon: 'globe-outline',
      route: '/public-profile'
    },
    {
      title: 'Photo des travaux réalisés',
      icon: 'images-outline',
      route: '/work-photos'
    },
    {
      title: 'Statistique',
      icon: 'stats-chart-outline',
      route: '/statistics'
    },
    {
      title: 'Options',
      icon: 'settings-outline',
      route: '/options'
    }
  ];

  constructor(private navCtrl: NavController) {
    addIcons({
      arrowBackOutline,      // Icône flèche retour
      pencil,                // Icône éditer le profil
      walletOutline,         // Icône porte-monnaie (total gains)
      listOutline,          // Icône liste (total services)
      star,                 // Icône étoile (évaluation)
      pricetagOutline,      // Icône étiquette (tarif horaire)
      chevronForwardOutline, // Icône flèche menu
      homeOutline,          // Icône accueil (footer)
      documentTextOutline,  // Icône documents (footer)
      chatbubbleOutline,    // Icône chat (footer)
      // Icônes du menu
      personOutline,
      settingsOutline,
      helpCircleOutline,
      shieldCheckmarkOutline,
      cardOutline,
      notificationsOutline
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  navigateTo(route: string) {
    this.navCtrl.navigateForward(route);
  }

  logout() {
    // Implement logout logic
    console.log('Logging out...');
    this.navCtrl.navigateRoot('/');
  }

}
