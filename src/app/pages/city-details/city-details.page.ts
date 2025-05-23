import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonButton,
  IonImg,
  IonChip
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  locationOutline, 
  wifiOutline,
  tvOutline,
  carOutline,
  thermometerOutline,
  restaurantOutline,
  homeOutline
} from 'ionicons/icons';

interface CityDetail {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  rating: number;
  location: string;
  amenities: string[];
  host: {
    name: string;
    image: string;
    rating: number;
  };
}

@Component({
  selector: 'app-city-details',
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/home"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="city-image">
        <ion-img [src]="city?.image"></ion-img>
        <div class="price-tag">{{ city?.price }}</div>
      </div>

      <div class="content-container">
        <h1>{{ city?.name }}</h1>
        
        <div class="rating">
          <span *ngFor="let star of [1,2,3,4,5]" 
                [class.filled]="star <= (city?.rating ?? 0)">★</span>
          <span class="reviews">(127 avis)</span>
        </div>

        <div class="location">
          <ion-icon name="location-outline"></ion-icon>
          <span>{{ city?.location }}</span>
        </div>

        <div class="section">
          <h2>Description</h2>
          <p>{{ city?.description }}</p>
        </div>

        <div class="section">
          <h2>Équipements</h2>
          <div class="amenities-grid">
            <ion-chip *ngFor="let amenity of city?.amenities">
              <ion-icon [name]="getAmenityIcon(amenity)"></ion-icon>
              <span>{{ amenity }}</span>
            </ion-chip>
          </div>
        </div>

        <div class="section host-section">
          <h2>Votre hôte</h2>
          <div class="host-info">
            <img [src]="city?.host?.image" alt="Host">
            <div class="host-details">
              <h3>{{ city?.host?.name }}</h3>
              <div class="rating">
                <span *ngFor="let star of [1,2,3,4,5]" 
                      [class.filled]="star <= (city?.host?.rating ?? 0)">★</span>
                <span class="reviews">(127 avis)</span>
              </div>
            </div>
          </div>
        </div>

        <ion-button expand="block" class="book-button">
          Réserver maintenant
        </ion-button>
      </div>
    </ion-content>
  `,
  styles: [`
    ion-header {
      ion-toolbar {
        --background: transparent;
        --color: white;
        position: absolute;
        --border-color: transparent;
      }
    }

    .city-image {
      position: relative;
      
      ion-img {
        height: 300px;
        object-fit: cover;
      }

      .price-tag {
        position: absolute;
        bottom: 16px;
        right: 16px;
        background: #10B981;
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: 600;
      }
    }

    .content-container {
      padding: 24px;
      margin-top: -40px;
      border-radius: 40px 40px 0 0;
      background: white;
      position: relative;

      h1 {
        font-size: 24px;
        font-weight: 600;
        color: #333;
        margin: 0 0 8px;
      }

      .rating {
        font-size: 18px;
        color: #ffd700;
        margin-bottom: 12px;

        .filled {
          color: #ffd700;
        }

        .reviews {
          color: #666;
          font-size: 14px;
          margin-left: 8px;
        }
      }

      .location {
        display: flex;
        align-items: center;
        color: #666;
        margin-bottom: 24px;

        ion-icon {
          margin-right: 8px;
          color: #10B981;
        }
      }

      .section {
        margin-bottom: 24px;

        h2 {
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
        }

        p {
          color: #666;
          line-height: 1.6;
          margin: 0;
        }
      }

      .amenities-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        ion-chip {
          --background: #f5f5f5;
          --color: #666;
          padding: 8px 16px;

          ion-icon {
            color: #10B981;
            margin-right: 8px;
          }
        }
      }

      .host-section {
        .host-info {
          display: flex;
          align-items: center;
          background: #f5f5f5;
          padding: 16px;
          border-radius: 12px;

          img {
            width: 60px;
            height: 60px;
            border-radius: 30px;
            margin-right: 16px;
          }

          .host-details {
            h3 {
              margin: 0 0 4px;
              font-size: 18px;
              font-weight: 600;
              color: #333;
            }

            .rating {
              margin: 0;
              font-size: 14px;
            }
          }
        }
      }

      .book-button {
        --background: #10B981;
        --border-radius: 8px;
        --padding-top: 20px;
        --padding-bottom: 20px;
        margin-top: 24px;
        font-weight: 500;
      }
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonButton,
    IonImg,
    IonChip
  ]
})
export class CityDetailsPage implements OnInit {
  city?: CityDetail;

  constructor(private route: ActivatedRoute) {
    addIcons({ 
      locationOutline, 
      wifiOutline,
      tvOutline,
      carOutline,
      thermometerOutline,
      restaurantOutline,
      homeOutline
    });
  }

  ngOnInit() {
    const cityId = this.route.snapshot.paramMap.get('id');
    // Simulated city data
    this.city = {
      id: 1,
      name: 'Appartement au cœur de Paris',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Magnifique appartement situé en plein cœur de Paris, à deux pas des Champs-Élysées. Vue imprenable sur la Tour Eiffel, intérieur moderne et chaleureux.',
      price: '180€/nuit',
      rating: 4,
      location: 'Paris, France',
      amenities: ['Wifi', 'TV', 'Parking', 'Climatisation', 'Cuisine', 'Balcon'],
      host: {
        name: 'Marie Dubois',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        rating: 5
      }
    };
  }

  getAmenityIcon(amenity: string): string {
    const icons: { [key: string]: string } = {
      'Wifi': 'wifi-outline',
      'TV': 'tv-outline',
      'Parking': 'car-outline',
      'Climatisation': 'thermometer-outline',
      'Cuisine': 'restaurant-outline',
      'Balcon': 'home-outline'
    };
    return icons[amenity] || 'checkmark-outline';
  }
}