import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent, IonFooter,
  IonHeader,
  IonIcon, IonInput,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {arrowBack, attachOutline, ellipsisVertical, happyOutline, paperPlaneOutline} from "ionicons/icons";
import {NavController} from "@ionic/angular";

interface Message {
  id: number;
  text: string;
  sent: boolean; // true if sent by user, false if received
  timestamp: string;
}

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonAvatar, IonFooter, IonInput]
})
export class DiscussionPage implements OnInit {
  contactName: string = 'RAKOTO Salomon';
  contactAvatar: string = 'assets/images/avatar/rakoto-salomon.jpg';
  newMessage: string = '';

  messages: Message[] = [
    {
      id: 1,
      text: 'Salama Salomon',
      sent: false,
      timestamp: '10:00'
    },
    {
      id: 2,
      text: "J'ai une fuite dans le tuyau de ma cour. Peux-tu me dire combien de temps il te faudrait pour le réparer mercredi ?",
      sent: false,
      timestamp: '10:01'
    },
    {
      id: 3,
      text: 'Salama tompoko',
      sent: true,
      timestamp: '10:05'
    },
    {
      id: 4,
      text: 'Je pense que cela prendra environ 3 heures. Est-ce que ça vous convient ?',
      sent: true,
      timestamp: '10:05'
    },
    {
      id: 5,
      text: 'Oui, pas de souci. Je voulais juste savoir, car après 17 h, je ne serai plus disponible',
      sent: false,
      timestamp: '10:10'
    },
    {
      id: 6,
      text: "Dans ce cas, on peut avancer l'intervention en début d'après-midi ou même le matin si vous préférez.",
      sent: true,
      timestamp: '10:12'
    },
    {
      id: 7,
      text: 'Mercredi matin serait idéal pour moi, si ça vous va?',
      sent: false,
      timestamp: '10:15'
    },
    {
      id: 8,
      text: "D'accord, alors je passerai.",
      sent: true,
      timestamp: '10:18'
    }
  ];

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    this.contactName = history.state.chat.name;
    this.contactAvatar = history.state.chat.avatar;
    addIcons({
      arrowBack,
      ellipsisVertical,
      happyOutline,
      attachOutline,
      paperPlaneOutline
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({
        id: this.messages.length + 1,
        text: this.newMessage,
        sent: true,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
      });
      this.newMessage = '';
      // Faire défiler vers le bas après l'envoi du message
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    }
  }

  scrollToBottom() {
    // Cette fonction serait utilisée avec ViewChild pour faire défiler vers le bas
    const contentElement = document.querySelector('ion-content');
    if (contentElement) {
      contentElement.scrollToBottom(300);
    }
  }

  goBack() {
    this.navCtrl.back();
  }

}
