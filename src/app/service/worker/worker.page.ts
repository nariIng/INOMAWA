import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonIcon,
  IonToolbar
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {
  arrowBackOutline,
  filterOutline,
  ellipse,
  star,
  home,
  menu,
  chatbubbleOutline
} from 'ionicons/icons';
import {addIcons} from "ionicons";
import {TabCustomerComponent} from "../../shared/tab-customer/tab-customer.component";

interface Worker {
  id: number;
  name: string;
  image: string;
  skills: string[];
  rating: number;
  price: string;
}

@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonFooter, TabCustomerComponent]
})
export class WorkerPage implements OnInit {
  date:any;
  time:any;
  workers: Worker[] = [
    {
      id: 1,
      name: 'Rakoto Salomon',
      image: 'assets/images/avatar/rakoto-salomon.jpg',
      skills: ['tuyauterie', 'plomberie', 'sanitaire', 'fuite d\'eau'],
      rating: 4.5,
      price: '5 000'
    },
    {
      id: 2,
      name: 'Razanany Mirana',
      image: 'assets/images/avatar/razanany-mirana.jpg',
      skills: ['puits', 'porte-bidons', 'nettoyage', ''],
      rating: 5,
      price: '1 000'
    },
    {
      id: 3,
      name: 'Morafeno Chrisolin',
      image: 'assets/images/avatar/Morafeno-chrisolin.jpg',
      skills: ['transport d\'eau', 'porte-bidons', '', ''],
      rating: 3.5,
      price: '1 200'
    },
    {
      id: 4,
      name: 'Nanahary Tovomanana',
      image: 'assets/images/avatar/Nanahary-tovomanana.jpg',
      skills: ['nettoyeur', 'porte-bidons', 'puits', ''],
      rating: 4.5,
      price: '800'
    },
    {
      id: 5,
      name: 'Christine Natalie',
      image: 'assets/images/avatar/Christine-natalie.jpg',
      skills: ['nettoyage', 'lessive', '', ''],
      rating: 3.5,
      price: '5 000'
    }
  ];

  category={};

  constructor(private router: Router,private location:Location) {
    addIcons({
      arrowBackOutline,
      filterOutline,
      ellipse,
      star,
      home,
      menu,
      chatbubbleOutline
    });
  }

  ngOnInit() {
    this.category = history.state.category;
    this.date = history.state.date;
    this.time = history.state.time;
  }

  reserveWorker(worker: any) {
    this.router.navigate(['/service/resume'], {
      state: {
        worker:worker,
        category:this.category,
        date: this.date,
        time: this.time
      }
    });
  }

  showDetails(id: number) {
    this.router.navigate(['/service/worker/'+id],{
      state: {
        worker:this.findWorkerById(id),
        category:this.category,
        date: this.date,
        time: this.time
      }
    });
  }

  goBack() {
    this.location.back();
  }

  findWorkerById(id: number) {
    for (let i = 0; i < this.workers.length; i++) {
      if (this.workers[i].id === id) {
        return this.workers[i];
      }
    }
    return null;
  }
}
