import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { interval, Subscription } from 'rxjs';
import {TabWorkerComponent} from "../../shared/tab-worker/tab-worker.component";
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  timeOutline
} from 'ionicons/icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-working',
  templateUrl: './working.page.html',
  styleUrls: ['./working.page.scss'],
  standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, IonFooter, TabWorkerComponent]
})
export class WorkingPage implements OnInit, OnDestroy {

  // Timer variables
  currentTime: string = '10 : 52';
  hours: number = 0;
  minutes: number = 10;
  seconds: number = 52;
  timerSubscription?: Subscription;
  reservation:any;

  constructor(private location: Location,private router:Router) {
    addIcons({
      arrowBackOutline,  // Icône flèche retour
      timeOutline       // Icône horloge
    });
  }

  ngOnInit() {
    // Start the timer
    this.startTimer();
    this.reservation = history.state.reservation;
  }

  ngOnDestroy() {
    // Cleanup subscription when leaving the page
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer() {
    // Update timer every second
    this.timerSubscription = interval(1000).subscribe(() => {
      this.seconds++;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes >= 60) {
          this.minutes = 0;
          this.hours++;
        }
      }

      // Format time
      if (this.hours > 0) {
        this.currentTime = `${this.hours} : ${this.padNumber(this.minutes)} : ${this.padNumber(this.seconds)}`;
      } else {
        this.currentTime = `${this.minutes} : ${this.padNumber(this.seconds)}`;
      }
    });
  }

  padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  goBack() {
    this.location.back();
  }

  finishWork() {
    // Logic for completing the work
    console.log('Work finished');
    this.router.navigate(['/worker/done'],{
      state: { reservation: this.reservation },
    });
  }

  ignoreWork() {
    // Logic for ignoring the work
    console.log('Work ignored');
    this.location.back();
  }

}
