import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton]
})
export class IndexPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  hrefLoginUser(){
    this.router.navigate(['/login/user']);
  }

  hrefLoginWorker(){
    this.router.navigate(['/login/worker']);
  }
}
