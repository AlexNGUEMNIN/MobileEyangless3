import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locationOutline, timeOutline, callOutline, globeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-city-details',
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/home"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ city?.name }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <ion-img [src]="city?.image" alt="city image"></ion-img>
        <ion-card-header>
          <ion-card-title>{{ city?.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>{{ city?.description }}</p>
          
          <ion-list>
            <ion-item>
              <ion-icon name="location-outline" slot="start"></ion-icon>
              <ion-label>
                <h2>Location</h2>
                <p>{{ city?.location }}</p>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="time-outline" slot="start"></ion-icon>
              <ion-label>
                <h2>Best Time to Visit</h2>
                <p>{{ city?.bestTime }}</p>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="call-outline" slot="start"></ion-icon>
              <ion-label>
                <h2>Emergency Contact</h2>
                <p>{{ city?.emergency }}</p>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="globe-outline" slot="start"></ion-icon>
              <ion-label>
                <h2>Tourist Information</h2>
                <p>{{ city?.touristInfo }}</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  styles: [`
    ion-card {
      margin: 0;
      
      ion-img {
        height: 250px;
        object-fit: cover;
      }
    }
    
    ion-card-content {
      p {
        margin-bottom: 20px;
      }
    }
    
    ion-item {
      --padding-start: 0;
      
      ion-icon {
        margin-right: 16px;
      }
    }
  `],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonList,
    IonItem,
    IonLabel,
    IonIcon
  ]
})
export class CityDetailsPage implements OnInit {
  city: any;

  constructor(private route: ActivatedRoute) {
    addIcons({ locationOutline, timeOutline, callOutline, globeOutline });
  }

  ngOnInit() {
    const cityId = this.route.snapshot.paramMap.get('id');
    // In a real app, you would fetch this data from a service
    this.city = {
      id: 1,
      name: 'New York',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
      description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers.',
      location: 'United States, North America',
      bestTime: 'April to June or September to early November',
      emergency: '911',
      touristInfo: 'Visit NYC Tourism Center or call +1-212-484-1222'
    };
  }
}