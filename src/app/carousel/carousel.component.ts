import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, TranslateModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  @Input() images: string[] = []; // Liste d'images en entrée
  currentIndex: number = 0;
  intervalId: any;
  filterList: string[] = ['green', 'red', 'yellow', 'blue'];
  title: string[] = [];
  content: string = this.title[0];
  bg_color: { [key: string]: string } = {
    background: 'green', // Utilisation directe de la valeur de `bg`
  };

  ngOnInit(): void {
    this.translate.get('home.carrouselTitle').subscribe((data: string[]) => {
      this.title = data;
    });
    this.translate.onLangChange.subscribe((evt) => {
      this.translate.get('home.carrouselTitle').subscribe((data: string[]) => {
       this.title = data;
      });
    });
  }

  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoplay() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.bg_color = {
      background: this.filterList[this.currentIndex], // Utilisation directe de la valeur de `bg`
    };
    this.content = this.title[this.currentIndex];
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.bg_color = {
      background: this.filterList[this.currentIndex], // Utilisation directe de la valeur de `bg`
    };
    this.content = this.title[this.currentIndex];
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.bg_color = {
      background: this.filterList[this.currentIndex], // Utilisation directe de la valeur de `bg`
    };
    this.content = this.title[this.currentIndex];
  }
}
