import { Component } from "@angular/core";
import { CardaddressComponent } from "../../../../../../cardaddress/cardaddress.component";
import { ImgcardtextComponent } from "../../../../../../imgcardtext/imgcardtext.component";


@Component({
  standalone:true,
  templateUrl:"./health-activities.component.html",
  imports: [CardaddressComponent, ImgcardtextComponent]
})
export class HealthActivitiesComponent{

}