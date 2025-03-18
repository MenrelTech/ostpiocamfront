import { Component } from '@angular/core';
import { NumberedcardtextComponent } from '../../numberedcardtext/numberedcardtext.component';
import { ImgcardtextComponent } from '../../imgcardtext/imgcardtext.component';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-accueil-sante',
  imports: [NumberedcardtextComponent,ImgcardtextComponent,CardComponent],
  templateUrl: './accueil-sante.component.html',
  styleUrl: './accueil-sante.component.css'
})
export class AccueilSanteComponent {
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
