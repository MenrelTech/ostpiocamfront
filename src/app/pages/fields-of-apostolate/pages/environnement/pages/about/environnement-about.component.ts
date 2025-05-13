import { Component } from '@angular/core';
import { NumberedcardtextComponent } from "../../../../../../numberedcardtext/numberedcardtext.component";
import { ImgcardtextComponent } from "../../../../../../imgcardtext/imgcardtext.component";
import { CardComponent } from "../../../../../../card/card.component";
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './environnement-about.component.html',
  imports: [NumberedcardtextComponent, ImgcardtextComponent, CardComponent, RouterLink],
})
export class EnvironnementAboutComponent {

  link = "/champs d'apostolat/environnement/historicité"
}
