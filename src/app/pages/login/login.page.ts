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
  selector: 'app-login',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="login-container">
        <h1>Welcome Back</h1>
        <form (ngSubmit)="login()">
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" [(ngModel)]="email" name="email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>
          </ion-item>

          <ion-button expand="block" type="submit" class="ion-margin-top">Login</ion-button>
          <ion-button expand="block" fill="clear" (click)="navigateToRegister()">
            Don't have an account? Register
          </ion-button>
        </form>
      </div>
    </ion-content>
  `,
  styles: [`
    .login-container {
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
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Add login logic here
    this.router.navigate(['/tabs/home']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}