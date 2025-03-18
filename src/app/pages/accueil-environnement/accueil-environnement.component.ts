import { Component } from '@angular/core';
import { NumberedcardtextComponent } from '../../numberedcardtext/numberedcardtext.component';
import { ImgcardtextComponent } from '../../imgcardtext/imgcardtext.component';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-accueil-environnement',
  imports: [NumberedcardtextComponent,ImgcardtextComponent,CardComponent],
  templateUrl: './accueil-environnement.component.html',
  styleUrl: './accueil-environnement.component.css'
})
export class AccueilEnvironnementComponent {
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
