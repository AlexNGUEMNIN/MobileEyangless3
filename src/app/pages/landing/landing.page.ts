import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-landing',
  template: `
    <ion-content class="ion-padding">
      <div class="landing-container">
        <ion-img src="assets/landing-image.jpg" alt="Landing"></ion-img>
        <h1>Discover Amazing Cities</h1>
        <p>Explore the world's most beautiful destinations</p>
        <ion-button expand="block" (click)="navigateToLogin()">Get Started</ion-button>
      </div>
    </ion-content>
  `,
  styles: [`
    .landing-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;

      ion-img {
        max-width: 200px;
        margin-bottom: 2rem;
      }

      h1 {
        font-size: 24px;
        margin-bottom: 1rem;
      }

      p {
        color: var(--ion-color-medium);
        margin-bottom: 2rem;
      }
    }
  `],
  standalone: true,
  imports: [IonContent, IonButton, IonImg]
})
export class LandingPage {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}