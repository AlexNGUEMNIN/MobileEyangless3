import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-landing',
  template: `
    <ion-content class="landing-content">
      <div class="landing-container">
        <img src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg" alt="City" class="landing-image">
        <div class="content-overlay">
          <h1>Trouvez la chambre</h1>
          <h2>dans la ville choisie</h2>
          <ion-button expand="block" class="custom-button" (click)="navigateToLogin()">
            Suivant
          </ion-button>
        </div>
      </div>
    </ion-content>
  `,
  styles: [`
    .landing-content {
      --background: transparent;
    }

    .landing-container {
      height: 100%;
      position: relative;
    }

    .landing-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
    }

    .content-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 2rem;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      color: white;
      text-align: left;
    }

    h1 {
      font-size: 32px;
      margin: 0;
      font-weight: bold;
    }

    h2 {
      font-size: 24px;
      margin: 8px 0 32px;
      font-weight: normal;
    }

    .custom-button {
      --background: #10B981;
      --border-radius: 8px;
      --padding-top: 20px;
      --padding-bottom: 20px;
      font-weight: 500;
      text-transform: none;
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