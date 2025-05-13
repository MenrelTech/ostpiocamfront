import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../../../../card/card.component';
import { ImgcardtextComponent } from '../../../../../../imgcardtext/imgcardtext.component';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';

@Component({
  standalone: true,
  templateUrl: './health-sime.component.html',
  imports: [
    RouterLink,
    CardComponent,
    ImgcardtextComponent,
    NumberedcardtextComponent,
    RouterLink
  ],
})
export class HealthSimeComponent {
  link = "/champs d'apostolat/sante/historicité";
}
