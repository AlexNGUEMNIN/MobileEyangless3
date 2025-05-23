import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-landing',
  template: `
    <ion-content>
      <div class="landing-container">
        <img src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg" alt="City" class="landing-image">
        <div class="content">
          <div class="logo">FungyPass</div>
          <h1>Trouvez la chambre</h1>
          <h2>dans la ville choisie</h2>
          <ion-button expand="block" (click)="navigateToLogin()">
            Suivant
          </ion-button>
        </div>
      </div>
    </ion-content>
  `,
  styles: [`
    .landing-container {
      height: 100vh;
      position: relative;
      display: flex;
      align-items: flex-end;
    }

    .landing-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    .content {
      position: relative;
      z-index: 2;
      width: 100%;
      padding: 2rem;
      background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
      color: white;
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #10B981;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
    }

    h2 {
      font-size: 24px;
      margin: 8px 0 32px;
      opacity: 0.9;
    }

    ion-button {
      --background: #10B981;
      --border-radius: 8px;
      --padding-top: 20px;
      --padding-bottom: 20px;
      font-weight: 500;
      margin: 0;
    }
  `],
  standalone: true,
  imports: [IonContent, IonButton]
})
export class LandingPage {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}