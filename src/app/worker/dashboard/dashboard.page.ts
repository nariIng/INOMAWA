import {Component, OnInit} from "@angular/core";
import {
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
} from "@ionic/angular/standalone";
import {CommonModule} from "@angular/common";
import {TabWorkerComponent} from "../../shared/tab-worker/tab-worker.component";
import { addIcons } from 'ionicons';
import {
  locationOutline,
  refreshOutline,
  listOutline,
  heartOutline,
  calendarOutline,
  star
} from 'ionicons/icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    IonButton,
    CommonModule,
    TabWorkerComponent,
    IonFooter,
  ]
})
export class DashboardPage implements OnInit {
  plumber = {
    name: 'RAKOTO Salomon',
    location: 'A32 Betavoahangy Itaosy, Antananarivo',
    avatar: 'assets/images/avatar/rakoto-salomon.jpg',
    totalEarnings: '260 000 Ar',
    totalServices: 23,
    favoriteServices: 4,
    todayServices: 2
  };

  serviceRequests = [
    {
      type: 'Maintenant',
      location: 'Lot 95 Ter Isotsoaka',
      client: 'Marie RASOA',
      serviceType: 'Plombier',
      price: '12 500 Ar',
      clientAvatar: 'assets/images/avatar/marie-rasoa.jpg',
      image: 'assets/images/working.png'
    },
    {
      type: 'À 15:00',
      location: 'Lot ITB 59 Cité Itaosy',
      client: 'Hery Falimanana',
      serviceType: 'Vaporiste',
      price: '10 000 AR',
      clientAvatar: 'assets/images/avatar/Hery-rafalimanana.jpg',
      image: 'assets/images/index.png'
    }
  ];

  reviews = [
    {
      name: 'LIOKA RAMARO',
      rating: 5,
      comment: 'Bon travailleur, un bon gars. Il est sympa et finit bien ses services à temps.'
    },
    {
      name: 'Aimée RASOARIMALALA',
      rating: 5,
      comment: 'Il arrive bien à l\'heure tous le temps'
    }
  ];

  constructor(private router:Router) {
    addIcons({
      locationOutline,  // Icône de localisation
      refreshOutline,   // Icône de revenus (actualisation)
      listOutline,     // Icône de liste (total services)
      heartOutline,    // Icône de coeur (favoris)
      calendarOutline, // Icône de calendrier (services du jour)
      star             // Icône étoile (évaluations)
    });
  }

  ngOnInit() {
  }

  ignoreRequest(index: number) {
    if (index >= 0 && index < this.serviceRequests.length) {
      this.serviceRequests.splice(index, 1);
    }
    // Implement ignore logic
  }

  acceptRequest(index: number) {
    if (index >= 0 && index < this.serviceRequests.length) {
      this.serviceRequests.splice(index, 1);
    }
  }

  navigateToProfile() {
    this.router.navigate(['/worker/profile']);
  }
}
