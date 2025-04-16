import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {
  IonBadge,
  IonButton,
  IonContent, IonFooter,
  IonHeader, IonIcon,
  IonItem,
  IonSelect,
  IonSelectOption, IonTabBar, IonTabButton,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {TabWorkerComponent} from "../../shared/tab-worker/tab-worker.component";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSelect, IonSelectOption, IonIcon, IonButton, IonFooter, TabWorkerComponent]
})
export class ReservationPage implements OnInit {
  filterValue: string = 'Tout';

  reservations = [
    {
      id: 1,
      serviceType: 'Réparation de plomberie',
      status: 'en progression',
      startTime: '08:30',
      time: '15:00',
      endTime: '11:00',
      date: '18 Dec, 2024',
      price: '5 000 Ar/h',
      location: 'Lot 85 Ter Isotsoika',
      image: 'assets/images/issue/issue2.jpg',
      client: {
        name: 'Marie RASOA',
        role: 'Propriétaire',
        avatar: 'assets/images/avatar/marie-rasoa.jpg'
      }
    },
    {
      id: 2,
      serviceType: 'Réparation de robinets',
      status: 'en attente',
      date: '16 Dec, 2024',
      time: '15:00',
      price: '5 000 Ar/h',
      location: 'Lot ITB 59 Cité Itaosy',
      image: 'assets/images/issue/issue1.jpg',
      client: {
        name: 'Hery Falimanana',
        role: 'Gardien de maison',
        avatar: 'assets/images/avatar/Hery-rafalimanana.jpg'
      }
    },
    {
      id: 3,
      serviceType: 'Réparation fuite de plafond',
      status: 'confirmé',
      date: '14 Dec, 2024',
      time: '10:00',
      price: '15 000 Ar/h',
      location: 'Lot ITV 23 TER Ampasapito',
      image: 'assets/images/issue/plafond.jpg',
      client: {
        name: 'LIOKA RAMARO',
        role: 'Propriétaire',
        avatar: 'assets/images/avatar/lioka-ramaro.jpg'
      }
    }
  ];

  reservationsFiltered=this.reservations.slice(1);

  constructor(private router:Router) { }

  ngOnInit() {
  }

  callClient(client: any) {
    console.log('Calling client:', client.name);
    // Implement call functionality
  }

  messageClient(client: any) {
    const chat={
      name: client.name,
      avatar: client.avatar
    }
    this.router.navigate(['/worker/chat/discussion'],{
      state: { chat: chat }
    })
  }

  ignoreReservation(id: number) {
      this.reservations.splice(0, 1);
      this.reservationsFiltered=this.reservations.slice(1);
      console.log(this.reservationsFiltered);
  }

  finishReservation(reservation: any) {
    this.router.navigate(['/worker/done'],{
      state: { reservation: reservation}
    });
  }

  filterList() {
    if (this.filterValue === 'Tout') {
      this.reservationsFiltered = [...this.reservations].slice(1);
    } else {
      this.reservationsFiltered = this.reservations.filter(
        reservation => {
          return reservation.status === this.filterValue
        }
      );
    }
  }

  navigateWorking(reservation: any) {
    this.router.navigate(['/worker/working'],{
      state: { reservation: reservation }
    });
  }
}
