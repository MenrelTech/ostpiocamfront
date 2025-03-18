import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: string[] = []; // Liste d'images en entrée
  currentIndex: number = 0;
  intervalId: any;




  /*startAutoplay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change d’image toutes les 3 secondes
  }*/

  /*stopAutoplay() {
    clearInterval(this.intervalId);
  }*/

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
