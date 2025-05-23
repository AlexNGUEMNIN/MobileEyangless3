import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonItem, 
  IonInput, 
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  template: `
    <ion-content>
      <div class="login-container">
        <div class="logo">FungyPass</div>
        <div class="header">
          <h1>Connectez-vous</h1>
          <p>à votre compte</p>
        </div>

        <form (ngSubmit)="login()">
          <ion-item lines="none">
            <ion-icon name="mail-outline" slot="start"></ion-icon>
            <ion-input 
              type="email" 
              placeholder="Email"
              [(ngModel)]="email" 
              name="email">
            </ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-icon name="lock-closed-outline" slot="start"></ion-icon>
            <ion-input 
              type="password" 
              placeholder="Mot de passe"
              [(ngModel)]="password" 
              name="password">
            </ion-input>
          </ion-item>

          <ion-button expand="block" type="submit">
            Se connecter
          </ion-button>

          <div class="register-link">
            <span>Vous n'avez pas de compte?</span>
            <ion-button fill="clear" (click)="navigateToRegister()">
              S'inscrire
            </ion-button>
          </div>
        </form>
      </div>
    </ion-content>
  `,
  styles: [`
    .login-container {
      padding: 2rem;
      height: 100%;
      background: white;
    }

    .logo {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      color: #10B981;
      margin: 3rem 0 2rem;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;

      h1 {
        font-size: 24px;
        color: #333;
        margin: 0;
      }

      p {
        color: #666;
        margin: 8px 0 0;
      }
    }

    ion-item {
      --background: #f5f5f5;
      --border-radius: 8px;
      margin-bottom: 16px;
      --padding-start: 16px;
      --padding-end: 16px;
      --inner-padding-end: 16px;

      ion-icon {
        color: #666;
        margin-right: 12px;
      }
    }

    ion-button {
      --background: #10B981;
      --border-radius: 8px;
      --padding-top: 20px;
      --padding-bottom: 20px;
      margin-top: 2rem;
      font-weight: 500;
    }

    .register-link {
      margin-top: 2rem;
      text-align: center;
      
      span {
        color: #666;
      }

      ion-button {
        --color: #10B981;
        margin: 0;
        font-weight: 500;
      }
    }
  `],
  standalone: true,
  imports: [
    FormsModule,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon
  ]
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {
    addIcons({ mailOutline, lockClosedOutline });
  }

  login() {
    this.router.navigate(['/tabs/home']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}