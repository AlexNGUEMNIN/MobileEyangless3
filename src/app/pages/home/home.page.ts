import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonMenuButton,
  IonButtons,
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, mapOutline, heartOutline, personOutline } from 'ionicons/icons';

interface City {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Les belles villes</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar
          placeholder="Rechercher une ville..."
          (ionInput)="handleSearch($event)"
          class="custom-searchbar">
        </ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="6" *ngFor="let city of filteredCities">
            <ion-card (click)="openCityDetails(city.id)" class="city-card">
              <ion-img [src]="city.image" alt="city image"></ion-img>
              <ion-card-header>
                <ion-card-title>{{ city.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p class="price">{{ city.price }}</p>
                <div class="rating">
                  <span *ngFor="let star of [1,2,3,4,5]" 
                        [class.filled]="star <= city.rating">★</span>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" selected>
          <ion-icon name="home-outline"></ion-icon>
          <ion-label>Accueil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="map">
          <ion-icon name="map-outline"></ion-icon>
          <ion-label>Carte</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="favorites">
          <ion-icon name="heart-outline"></ion-icon>
          <ion-label>Favoris</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile">
          <ion-icon name="person-outline"></ion-icon>
          <ion-label>Profil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-content>
  `,
  styles: [`
    ion-header {
      ion-toolbar {
        --background: white;
        
        ion-title {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }

    .custom-searchbar {
      --background: #f5f5f5;
      --border-radius: 8px;
      --box-shadow: none;
      --placeholder-color: #666;
      --icon-color: #666;
      padding: 0 16px;
    }

    .city-card {
      margin: 8px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      overflow: hidden;

      ion-img {
        height: 120px;
        object-fit: cover;
      }

      ion-card-header {
        padding: 12px;

        ion-card-title {
          font-size: 16px;
          font-weight: 600;
        }
      }

      ion-card-content {
        padding: 0 12px 12px;

        .price {
          color: #10B981;
          font-weight: 600;
          margin: 0;
        }

        .rating {
          color: #ffd700;
          font-size: 14px;
          margin-top: 4px;

          .filled {
            color: #ffd700;
          }
        }
      }
    }

    ion-tab-bar {
      --background: white;
      border-top: 1px solid #eee;

      ion-tab-button {
        --color: #666;
        --color-selected: #10B981;

        ion-icon {
          font-size: 24px;
        }

        ion-label {
          font-size: 12px;
        }
      }
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonMenuButton,
    IonButtons,
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonLabel
  ]
})
export class HomePage {
  cities: City[] = [
    {
      id: 1,
      name: 'Paris',
      image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
      price: '180€/nuit',
      rating: 5
    },
    {
      id: 2,
      name: 'New York',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
      price: '150€/nuit',
      rating: 4
    },
    {
      id: 3,
      name: 'Tokyo',
      image: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg',
      price: '120€/nuit',
      rating: 4
    },
    {
      id: 4,
      name: 'Londres',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      price: '160€/nuit',
      rating: 4
    }
  ];

  filteredCities: City[] = this.cities;

  constructor(private router: Router) {
    addIcons({ homeOutline, mapOutline, heartOutline, personOutline });
  }

  handleSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter(city => 
      city.name.toLowerCase().includes(query)
    );
  }

  openCityDetails(id: number) {
    this.router.navigate(['/city-details', id]);
  }
}