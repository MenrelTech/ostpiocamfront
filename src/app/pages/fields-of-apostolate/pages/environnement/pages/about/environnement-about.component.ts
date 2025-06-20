import { Component } from '@angular/core';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';
import { CardComponent } from '../../../../../../card/card.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: './environnement-about.component.html',
  imports: [
    NumberedcardtextComponent,
    CardComponent,
    RouterLink,
    TranslateModule,
  ],
})
export class EnvironnementAboutComponent {
  link = "/champs d'apostolat/environnement/historicité";
}
