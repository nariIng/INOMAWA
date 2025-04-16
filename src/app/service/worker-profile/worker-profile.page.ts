import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  bookmark,
  shareSocialOutline,
  ellipsisHorizontal,
  star,
  chatbubbleOutline,
  calendarOutline
} from 'ionicons/icons';
import {TabCustomerComponent} from "../../shared/tab-customer/tab-customer.component";

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.page.html',
  styleUrls: ['./worker-profile.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonTitle,
    IonContent,
    CommonModule,
    FormsModule,
    IonFooter,
    TabCustomerComponent
  ]
})
export class WorkerProfilePage implements OnInit {
  plumber = {
    name: 'Rakoto Salomon',
    price: '5 000',
    description: 'Expert en plomberie et en tuyauterie. Salomon répare rapidement les fuites d\'eau et installe vos équipements avec précision. Disponible 24/7, il garantit un service fiable et efficace pour éviter tout dégât des eaux !',
    completedJobs: 23,
    image: 'img',
    rating: 4.5,
    projects: [
      {
        image: 'assets/images/work/work1.jpg',
      },
      {
        image: 'assets/images/work/work2.jpg',
      },
      {
        image: 'assets/images/work/work3.jpg',
      }
    ],
    reviews: [
      {
        name: 'LIOKA RAMARO',
        rating: 5,
        comment: 'Bon travailleur, un bon gars. Il est sympa et finit bien ses services à temps.'
      },
      {
        name: 'Ernestine ELISA',
        rating: 4,
        comment: 'Il nous a beaucoup aidé depuis longtemps. À chaque souci en cuisine, ou avec la plomberie, c\'est l\'homme de main idéal. Il fait très bon travail pour un prix très abordable.'
      }
    ],
  };

  category={}

  constructor(private location: Location,private router:Router) {
    addIcons({
      arrowBackOutline,    // Icône flèche retour
      bookmark,           // Icône bookmark
      shareSocialOutline, // Icône partage
      ellipsisHorizontal, // Icône points de suspension
      star,               // Icône étoile (évaluation)
      chatbubbleOutline,  // Icône message
      calendarOutline     // Icône calendrier (réservation)
    });
  }

  ngOnInit() {
    this.plumber.name = history.state.worker.name;
    this.plumber.image = history.state.worker.image;
    this.category = history.state.category;
  }

  goBack() {
    this.location.back();
  }

  shareProfile() {
    console.log('Share profile');
  }

  sendMessage() {
    const chat={
      name: this.plumber.name,
      avatar: this.plumber.image
    }
    this.router.navigate(['/customer/chat/discussion'],{
      state: { chat: chat}
    })
  }

  makeReservation() {
    this.router.navigate(['/service/resume'],{
      state: {
        worker: this.plumber,
        category: this.category,
        date: history.state.date,
        time: history.state.time
      },
    })
  }

}
