import { Component } from '@angular/core';
import { CardaddressComponent } from '../../cardaddress/cardaddress.component';
import { ImgcardtextComponent } from '../../imgcardtext/imgcardtext.component';
import { CalendarComponent } from '../../calendar/calendar.component';
import { RdvcardComponent } from '../../rdvcard/rdvcard.component';

@Component({
  selector: 'app-activite-spiritualite',
  imports: [RdvcardComponent,CalendarComponent,CardaddressComponent],
  templateUrl: './activite-spiritualite.component.html',
  styleUrl: './activite-spiritualite.component.css'
})
export class ActiviteSpiritualiteComponent {
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
