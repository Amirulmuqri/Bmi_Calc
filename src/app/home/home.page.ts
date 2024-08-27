import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonRange, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, 
    CommonModule,
    FormsModule,  
    IonButton,
    IonLabel,
    IonRange,
    IonItem,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ],
})
export class HomePage {
  height: number = 175 ; // Default height in cm
  weight: number = 89 ;  // Default weight in kg
  bmi!: number;
  bmiCategory!: string;

  constructor() {}



  calculateBMI() {
    const heightInMeters = this.height / 100;
    this.bmi = this.weight / (heightInMeters * heightInMeters);
    this.setBMICategory();
  }

  setBMICategory() {
    if (this.bmi < 18.5) {
      this.bmiCategory = 'Underweight';
    } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
      this.bmiCategory = 'Normal';
    } else if (this.bmi >= 25 && this.bmi < 29.9) {
      this.bmiCategory = 'Overweight';
    } else {
      this.bmiCategory = 'Obese';
    }
  }
}
