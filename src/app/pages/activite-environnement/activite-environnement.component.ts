import { Component } from '@angular/core';
import { CardaddressComponent } from '../../cardaddress/cardaddress.component';
import { ImgcardtextComponent } from '../../imgcardtext/imgcardtext.component';

@Component({
  selector: 'app-activite-environnement',
  imports: [CardaddressComponent,ImgcardtextComponent],
  templateUrl: './activite-environnement.component.html',
  styleUrl: './activite-environnement.component.css'
})
export class ActiviteEnvironnementComponent {
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
