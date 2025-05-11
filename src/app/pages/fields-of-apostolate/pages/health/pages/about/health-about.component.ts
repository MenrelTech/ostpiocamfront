import { Component } from "@angular/core";
import { CardComponent } from "../../../../../../card/card.component";
import { ImgcardtextComponent } from "../../../../../../imgcardtext/imgcardtext.component";
import { NumberedcardtextComponent } from "../../../../../../numberedcardtext/numberedcardtext.component";


@Component({
  standalone:true,
  templateUrl:"./health-about.component.html",
  imports: [CardComponent, ImgcardtextComponent, NumberedcardtextComponent]
})
export class HealthAboutComponent{

}