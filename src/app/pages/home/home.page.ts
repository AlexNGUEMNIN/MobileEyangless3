import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList,
  IonItem,
  IonLabel,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonMenuButton,
  IonButtons
} from '@ionic/angular/standalone';

interface City {
  id: number;
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Discover Cities</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar
          placeholder="Search cities..."
          (ionInput)="handleSearch($event)"
        ></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" sizeMd="6" *ngFor="let city of filteredCities">
            <ion-card (click)="openCityDetails(city.id)">
              <ion-img [src]="city.image" alt="city image"></ion-img>
              <ion-card-header>
                <ion-card-title>{{ city.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{ city.description }}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `,
  styles: [`
    ion-card {
      margin: 10px;
      cursor: pointer;
      
      ion-img {
        height: 200px;
        object-fit: cover;
      }
    }
    
    ion-card-title {
      font-size: 1.2em;
      font-weight: bold;
    }
  `],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonSearchbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonMenuButton,
    IonButtons
  ]
})
export class HomePage implements OnInit {
  cities: City[] = [
    {
      id: 1,
      name: 'New York',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
      description: 'The city that never sleeps'
    },
    {
      id: 2,
      name: 'Paris',
      image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
      description: 'City of lights and love'
    },
    {
      id: 3,
      name: 'Tokyo',
      image: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg',
      description: 'A blend of tradition and innovation'
    }
  ];

  filteredCities: City[] = this.cities;

  constructor(private router: Router) {}

  ngOnInit() {}

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