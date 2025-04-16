import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonAvatar,
    IonBadge,
    IonContent,
    IonFooter,
    IonHeader,
    IonItem, IonLabel, IonList, IonSearchbar,
    IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {TabWorkerComponent} from "../../../shared/tab-worker/tab-worker.component";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonAvatar, IonBadge, IonFooter, IonItem, IonLabel, IonList, IonSearchbar, TabWorkerComponent]
})
export class MenuPage implements OnInit {
  chatList = [
    {
      id: 1,
      name: 'Marie RASOA',
      message: 'Salama ...',
      time: '16:52',
      avatar: 'assets/images/avatar/marie-rasoa.jpg',
      unread: 2
    },
    {
      id: 2,
      name: 'Naina Fernand',
      message: 'à quel heure vous venez ?',
      time: '14:37',
      avatar: 'assets/images/avatar/naina-fernand.jpg',
      unread: 1
    },
    {
      id: 3,
      name: 'Lalaina Mamonjy',
      message: 'Combien votre service coûte t-il ?',
      time: '09:03',
      avatar: 'assets/images/avatar/lalaina-mamonjy.jpg',
      unread: 0
    },
    {
      id: 4,
      name: 'Donné Morafeno',
      message: 'Donner moi votre numéro',
      time: 'Hier',
      avatar: 'assets/images/avatar/donne-morafeno.jpg',
      unread: 0
    },
    {
      id: 5,
      name: 'Odile VOAHANGY',
      message: 'Merci pour votre service',
      time: '10/12/2024',
      avatar: 'assets/images/avatar/odile-voahangy.jpg',
      unread: 0
    },
    {
      id: 6,
      name: 'Tojo Nirina',
      message: 'où est ce que vous éte exactement ?',
      time: '05/12/2024',
      avatar: 'assets/images/avatar/tojo-nirina.jpg',
      unread: 0
    },
    {
      id: 7,
      name: 'Tiantsoa',
      message: 'hahah',
      time: '21/11/2024',
      avatar: 'assets/images/avatar/tiantsoa.jpg',
      unread: 2
    },
    {
      id: 8,
      name: 'Aiko Rabenja',
      message: 'Est ce vous êtes dispo ?',
      time: '07/11/2024',
      avatar: 'assets/images/avatar/aiko-rabenja.jpg',
      unread: 1
    },
    {
      id: 9,
      name: 'Vincent Ratefy',
      message: 'Votre service est super',
      time: '15/10/2024',
      avatar: 'assets/images/avatar/vincent-ratefy.jpg',
      unread: 0
    }
  ];

  constructor(private router:Router) { }

  ngOnInit() {}

  openChat(chat:any) {
    this.router.navigate(['/worker/chat/discussion'],{
      state: { chat:chat }
    })
  }

}
