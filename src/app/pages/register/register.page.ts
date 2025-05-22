import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="register-container">
        <h1>Create Account</h1>
        <form (ngSubmit)="register()">
          <ion-item>
            <ion-label position="floating">Full Name</ion-label>
            <ion-input type="text" [(ngModel)]="fullName" name="fullName"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" [(ngModel)]="email" name="email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>
          </ion-item>

          <ion-button expand="block" type="submit" class="ion-margin-top">Register</ion-button>
          <ion-button expand="block" fill="clear" (click)="navigateToLogin()">
            Already have an account? Login
          </ion-button>
        </form>
      </div>
    </ion-content>
  `,
  styles: [`
    .register-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 2rem;

      h1 {
        text-align: center;
        margin-bottom: 2rem;
      }

      form {
        ion-item {
          margin-bottom: 1rem;
        }
      }
    }
  `],
  standalone: true,
  imports: [
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonButtons,
    IonBackButton
  ]
})
export class RegisterPage {
  fullName: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    // Add registration logic here
    this.router.navigate(['/login']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}