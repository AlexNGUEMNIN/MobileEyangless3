import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, mailOutline, lockClosedOutline, phonePortraitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  template: `
    <ion-content class="register-content">
      <div class="register-container">
        <div class="header">
          <img src="assets/logo.png" alt="Logo" class="logo">
          <h1>Inscrivez-vous</h1>
          <p>créez votre compte</p>
        </div>

        <form (ngSubmit)="register()" class="register-form">
          <ion-item class="custom-input">
            <ion-icon name="person-outline" slot="start"></ion-icon>
            <ion-input 
              type="text" 
              placeholder="Nom complet"
              [(ngModel)]="fullName" 
              name="fullName">
            </ion-input>
          </ion-item>

          <ion-item class="custom-input">
            <ion-icon name="mail-outline" slot="start"></ion-icon>
            <ion-input 
              type="email" 
              placeholder="Email"
              [(ngModel)]="email" 
              name="email">
            </ion-input>
          </ion-item>

          <ion-item class="custom-input">
            <ion-icon name="phone-portrait-outline" slot="start"></ion-icon>
            <ion-input 
              type="tel" 
              placeholder="Téléphone"
              [(ngModel)]="phone" 
              name="phone">
            </ion-input>
          </ion-item>

          <ion-item class="custom-input">
            <ion-icon name="lock-closed-outline" slot="start"></ion-icon>
            <ion-input 
              type="password" 
              placeholder="Mot de passe"
              [(ngModel)]="password" 
              name="password">
            </ion-input>
          </ion-item>

          <ion-button expand="block" class="register-button" type="submit">
            S'inscrire
          </ion-button>

          <div class="login-link">
            <span>Vous avez déjà un compte?</span>
            <ion-button fill="clear" (click)="navigateToLogin()">
              Se connecter
            </ion-button>
          </div>
        </form>
      </div>
    </ion-content>
  `,
  styles: [`
    .register-content {
      --background: #ffffff;
    }

    .register-container {
      padding: 2rem;
      height: 100%;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
      margin-top: 2rem;
    }

    .logo {
      width: 80px;
      height: 80px;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 24px;
      color: #333;
      margin: 0;
    }

    p {
      color: #666;
      margin: 8px 0 0;
    }

    .register-form {
      .custom-input {
        --background: #f5f5f5;
        --border-radius: 8px;
        --padding-start: 16px;
        --padding-end: 16px;
        margin-bottom: 16px;

        ion-icon {
          color: #666;
          margin-right: 12px;
        }
      }
    }

    .register-button {
      --background: #10B981;
      --border-radius: 8px;
      --padding-top: 20px;
      --padding-bottom: 20px;
      margin-top: 2rem;
      text-transform: none;
    }

    .login-link {
      margin-top: 2rem;
      text-align: center;
      
      span {
        color: #666;
      }

      ion-button {
        --color: #10B981;
        text-transform: none;
        font-weight: 500;
      }
    }
  `],
  standalone: true,
  imports: [
    FormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon
  ]
})
export class RegisterPage {
  fullName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';

  constructor(private router: Router) {
    addIcons({ personOutline, mailOutline, lockClosedOutline, phonePortraitOutline });
  }

  register() {
    this.router.navigate(['/login']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}