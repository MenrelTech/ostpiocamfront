import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie-spiritualite',
  imports: [],
  templateUrl: './galerie-spiritualite.component.html',
  styleUrl: './galerie-spiritualite.component.css'
})
export class GalerieSpiritualiteComponent {
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
