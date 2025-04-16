import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar, IonBadge,
  IonButton,
  IonContent, IonFooter,
  IonHeader,
  IonIcon, IonItem,
  IonSelect, IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {TabCustomerComponent} from "../../shared/tab-customer/tab-customer.component";
import { addIcons } from 'ionicons';
import {
  searchOutline,
  locationOutline,
  star,
  call,
  chatbubbleOutline,
  closeCircle,
  // Icônes potentielles du composant app-tab-customer
  homeOutline,
  documentTextOutline,
  chatbubbleEllipsesOutline
} from 'ionicons/icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonAvatar, IonButton, IonBadge, IonFooter, IonSelect, IonSelectOption, IonItem, TabCustomerComponent]
})
export class ReservationPage implements OnInit {
  filterValue="";
  reservations = [
    {
      id: 1,
      status: 'en cours',
      statusClass: 'en-cours',
      title: 'Réparation plomberie',
      debut: '08:30',
      tel:'+261341234567',
      date: '16 Dec, 2024',
      fin: '11:00',
      price: '5 000 Ar/h',
      location: 'Lot 5 Ter Tsiatoska',
      technician: 'RAKOTO Salomon',
      technicianImage: "assets/images/avatar/rakoto-salomon.jpg",
      image: 'assets/images/issue/issue2.jpg'
    },
    {
      id: 2,
      status: 'attente',
      statusClass: 'attente',
      title: 'Tuyau cassé',
      date: '18 Dec, 2024',
      debut: '08:30',
      tel:'+261341234567',
      heure: '09:30',
      fin: '11:00',
      technician: 'RAKOTO SALOMON',
      technicianImage: "assets/images/avatar/rakoto-salomon.jpg",
      location: 'Lot 5 Ter Tsiatoska',
      price: '5 000 Ar/h',
      rating: 4.5,
      image: 'assets/images/issue/issue1.jpg'
    },
    {
      id: 3,
      status: 'terminé',
      statusClass: 'termine',
      title: 'Fuite d\'eau robinet',
      date: '21 Nov, 2024',
      heure: '10:19',
      tel:'+261341234567',
      fin: '11:00',
      debut: '08:30',
      technician: 'Détails',
      technicianImage: "assets/images/avatar/rakoto-salomon.jpg",
      rating: 4.5,
      price: '5 000 Ar/h',
      location: 'Lot 5 Ter Tsiatoska',
      hasMessages: true,
      messageCount: 2,
      rescheduleAvailable: true,
      image: 'assets/images/issue/issue-robinet.jpg'
    }
  ];

  reservationFiltered:any=this.reservations;

  constructor(private router:Router) {
    addIcons({
      searchOutline,      // Icône de recherche
      locationOutline,    // Icône de localisation
      star,               // Icône étoile (évaluations)
      call,               // Icône d'appel
      chatbubbleOutline,  // Icône de message
      closeCircle,        // Icône de fermeture
      // Ajoutez aussi les icônes du footer si nécessaire
      homeOutline,
      documentTextOutline,
      chatbubbleEllipsesOutline
    });
  }

  ngOnInit(): void {

  }

  callTechnician(reservation:any) {

  }

  messageTechnician(reservation:any) {
    const chat={
      name: reservation.technician,
      avatar: reservation.technicianImage
    }
    this.router.navigate(['/customer/chat/discussion'],{
      state: { chat: chat}
    })
  }

  ignoreReservation(id: number, event: Event) {
    event.stopPropagation();
    console.log('Ignorer reservation', id);
  }

  filterList() {
    if (this.filterValue === 'Tout') {
      this.reservationFiltered = [...this.reservations];
    } else {
      this.reservationFiltered = this.reservations.filter(
        reservation => reservation.status === this.filterValue
      );
    }
  }

  workDone(reservation:any) {
    if(reservation.status === 'terminé'){
      this.router.navigate(['/service/done'],{
        state: {reservation: reservation}
      })
    }
  }
}
