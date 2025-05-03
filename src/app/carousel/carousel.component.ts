import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: string[] = []; // Liste d'images en entrée
  currentIndex: number = 0;
  intervalId: any;
  filterList : string[] = ['green', 'red','yellow', 'blue'];
  title : string[] = [
    "Une vision humanitaire du Cameroun et du monde",
    "Du sang disponible pour tous en toutes circonstance",
    "La prière comme arme de préservation de la paix",
    "Une voix qui éduque et édifie le monde"
  ];
  content : string = this.title[0];
  bg_color: { [key: string]: string } = {
    'background': 'green', // Utilisation directe de la valeur de `bg`
  };;


  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change d’image toutes les 3 secondes
  }

  stopAutoplay() {
    clearInterval(this.intervalId);
}

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.bg_color = {
      'background': this.filterList[this.currentIndex], // Utilisation directe de la valeur de `bg`
    };
    this.content = this.title[this.currentIndex];
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.bg_color = {
      'background': this.filterList[this.currentIndex], // Utilisation directe de la valeur de `bg`
    };
    this.content = this.title[this.currentIndex];
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.bg_color = {
      'background': this.filterList[this.currentIndex], // Utilisation directe de la valeur de `bg`
    };
    this.content = this.title[this.currentIndex];
  }
}
