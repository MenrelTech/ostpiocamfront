import { Component } from "@angular/core";
import { CardComponent } from "../../../../../../card/card.component";
import { ImgcardtextComponent } from "../../../../../../imgcardtext/imgcardtext.component";
import { NumberedcardtextComponent } from "../../../../../../numberedcardtext/numberedcardtext.component";
import { RouterLink } from "@angular/router";


@Component({
  standalone:true,
  templateUrl:"./health-about.component.html",
  imports: [CardComponent, ImgcardtextComponent, NumberedcardtextComponent, RouterLink]
})
export class HealthAboutComponent{


  link = "/champs d'apostolat/sante/historicité"
}