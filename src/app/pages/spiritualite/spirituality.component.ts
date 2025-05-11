import { Component } from '@angular/core';
import { TitlecardtextComponent } from '../../titlecardtext/titlecardtext.component';
import { ImgcardtextComponent } from '../../imgcardtext/imgcardtext.component';
import { CardComponent } from '../../card/card.component';
import { NumberedcardtextComponent } from '../../numberedcardtext/numberedcardtext.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil-spiritualite',
  imports: [
    NumberedcardtextComponent,
    TitlecardtextComponent,
    ImgcardtextComponent,
    CardComponent,
    RouterLink
  ],
  templateUrl: 'spirituality.component.html',
})
export class SpiritualityComponent {
  hidden = true;
  hidden2 = true;
  hidden3 = true;
  hidden4 = true;

  revealmenu() {
    this.hidden = false;
  }
  hidemenu() {
    this.hidden = true;
  }
  revealmenu2() {
    this.hidden2 = false;
  }
  hidemenu2() {
    this.hidden2 = true;
  }
  revealmenu3() {
    this.hidden3 = false;
  }
  hidemenu3() {
    this.hidden3 = true;
  }
  revealmenu4() {
    this.hidden4 = false;
  }
  hidemenu4() {
    this.hidden4 = true;
  }
}
