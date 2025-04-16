import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonInput,
  IonItem, IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription-customer',
  templateUrl: './inscription-customer.page.html',
  styleUrls: ['./inscription-customer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonButtons, IonBackButton, IonItem, IonLabel, IonInput, IonButton]
})
export class InscriptionCustomerPage implements OnInit {

  urlRedirection:string="";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.urlRedirection = history.state.urlRedirection;
  }

  onSubmit() {
    this.router.navigate([this.urlRedirection]);
  }

  goToLogin() {
    this.router.navigate([this.urlRedirection]);
  }

}
