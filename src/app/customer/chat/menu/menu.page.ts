import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar, IonBadge,
  IonContent, IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonSearchbar,
  IonToolbar
} from '@ionic/angular/standalone';
import {TabCustomerComponent} from "../../../shared/tab-customer/tab-customer.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonList, IonItem, IonAvatar, IonLabel, IonBadge, TabCustomerComponent, IonFooter]
})
export class MenuPage implements OnInit {
  chatList = [
    {
      id: 1,
      name: 'RAKOTO Salomon',
      message: "D'accord, alors je passerai.",
      time: '16:34',
      avatar: 'assets/images/avatar/rakoto-salomon.jpg',
      unread: 1
    },
    {
      id: 2,
      name: 'Fandresena',
      message: 'Vous: Comment réparer un conduit de...',
      time: '16:22',
      avatar: 'assets/images/avatar/Fandresena.jpg',
      unread: 0
    },
    {
      id: 3,
      name: 'Zozefa',
      message: 'Vous: Je veux une réduction...',
      time: '09:03',
      avatar: 'assets/images/avatar/Gilbert.jpg',
      unread: 0
    },
    {
      id: 4,
      name: 'Mirana',
      message: "Ce type de service n'est pas si ch...",
      time: 'Hier',
      avatar: 'assets/images/avatar/razanany-mirana.jpg',
      unread: 0
    },
    {
      id: 5,
      name: 'DERAINA',
      message: 'ca ira madame',
      time: '10/12/2024',
      avatar: 'assets/images/avatar/deraina.jpg',
      unread: 0
    },
    {
      id: 6,
      name: 'Hashley Tina',
      message: 'Ha ha, lol',
      time: '05/12/2024',
      avatar: 'assets/images/avatar/Hashley-tina.jpg',
      unread: 2
    },
    {
      id: 7,
      name: 'LOLO',
      message: 'Bien sûr',
      time: '20/11/2024',
      avatar: 'assets/images/avatar/Lolo.jpg',
      unread: 1
    },
    {
      id: 8,
      name: 'Gilbert Be',
      message: 'Remplacé le tuyau ?',
      time: '03/09/2024',
      avatar: 'assets/images/avatar/Gilbert.jpg',
      unread: 0
    },
    {
      id: 9,
      name: 'Tarainy',
      message: 'Merci',
      time: '12/08/2024',
      avatar: 'assets/images/avatar/Tarainy.jpg',
      unread: 0
    }
  ];

  constructor(private router:Router) { }

  ngOnInit() {}

  openChat(chat:any) {
    this.router.navigate(['/customer/chat/discussion'],{
      state: { chat:chat }
    })
  }

}
