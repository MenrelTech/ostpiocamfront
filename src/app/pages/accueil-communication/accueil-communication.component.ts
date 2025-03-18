import { Component, Input } from '@angular/core';
import { VerticalcardtextComponent } from '../../verticalcardtext/verticalcardtext.component';
import { CardtextComponent } from '../../cardtext/cardtext.component';
import { ImgcardtextComponent } from '../../imgcardtext/imgcardtext.component';

@Component({
  selector: 'app-accueil-communication',
  imports: [VerticalcardtextComponent,ImgcardtextComponent],
  templateUrl: './accueil-communication.component.html',
  styleUrl: './accueil-communication.component.css'
})
export class AccueilCommunicationComponent {
hidden = true;
  hidden2 = true;
  hidden3 = true;
  hidden4 = true;
  currentIndex: number = 0;
  intervalId: any;
  @Input() images: string[] = ['images/slide1.jpg', 'images/slide2.jpg', 'images/slide3.jpg'];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
  
  revealmenu(){
    this.hidden = false;
  }
  hidemenu(){
    this.hidden = true;
  }
  revealmenu2(){
    this.hidden2 = false;
  }
  hidemenu2(){
    this.hidden2 = true;
  }
  revealmenu3(){
    this.hidden3 = false;
  }
  hidemenu3(){
    this.hidden3 = true;
  }
  revealmenu4(){
    this.hidden4 = false;
  }
  hidemenu4(){
    this.hidden4 = true;
  }
}
