import { Component } from '@angular/core';

@Component({
  selector: 'app-apropos-spiritualite',
  imports: [],
  templateUrl: './apropos-spiritualite.component.html',
  styleUrl: './apropos-spiritualite.component.css'
})
export class AproposSpiritualiteComponent {
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
