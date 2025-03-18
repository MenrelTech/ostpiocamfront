import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NumberedcardtextComponent } from '../../numberedcardtext/numberedcardtext.component';
import { ImgcardtextComponent } from '../../imgcardtext/imgcardtext.component';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-accueil-spiritualite',
  imports: [NumberedcardtextComponent,ImgcardtextComponent,CardComponent],
  templateUrl: './accueil-spiritualite.component.html',
  styleUrl: './accueil-spiritualite.component.css'
})
export class AccueilSpiritualiteComponent {
  hidden = true;
  hidden2 = true;
  hidden3 = true;
  hidden4 = true;
  
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
