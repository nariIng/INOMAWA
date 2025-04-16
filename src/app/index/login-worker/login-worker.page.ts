import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline, mailOutline, lockClosedOutline, logInOutline, personAddOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login-worker',
  templateUrl: './login-worker.page.html',
  styleUrls: ['./login-worker.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginWorkerPage implements OnInit {
  showPassword = false;
  email:string="RakotoSalomon@gmail.com"
  password:string="Happy@easter"

  constructor(private router: Router) { }

  ngOnInit() {
    addIcons({
      arrowBackOutline,
      mailOutline,
      lockClosedOutline,
      logInOutline,
      personAddOutline,
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  loginWorker() {
    this.router.navigate(['/worker']);
  }

  goToInscription() {
    this.router.navigate(['/inscription-customer'],{
      state: {urlRedirection:"/login/worker"}
    })
  }
}
