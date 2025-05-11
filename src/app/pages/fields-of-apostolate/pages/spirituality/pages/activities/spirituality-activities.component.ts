import { Component } from "@angular/core";
import { CardaddressComponent } from "../../../../../../cardaddress/cardaddress.component";
import { RdvcardComponent } from "../../../../../../rdvcard/rdvcard.component";
import { CalendarComponent } from "../../../../../../calendar/calendar.component";


@Component({
  standalone:true, 
  templateUrl:"./spirituality-activities.component.html",
  imports: [CardaddressComponent, RdvcardComponent, CalendarComponent]
})
export class SpiritualityActivitiesComponent{

}