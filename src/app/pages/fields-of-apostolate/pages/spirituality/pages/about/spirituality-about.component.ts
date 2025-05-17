import { Component } from '@angular/core';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';
import { ImgcardtextComponent } from '../../../../../../imgcardtext/imgcardtext.component';
import { TitlecardtextComponent } from '../../../../../../titlecardtext/titlecardtext.component';
import { CardComponent } from '../../../../../../card/card.component';
import { RouterLink } from '@angular/router';
import { FieldOfApostolateNestedRouter } from '../../../../../../shared/app-router/app-router';

@Component({
  standalone: true,
  templateUrl: './spirituality-about.component.html',
  imports: [
    NumberedcardtextComponent,
    ImgcardtextComponent,
    TitlecardtextComponent,
    CardComponent,
    RouterLink
  ],
})
export class SpiritualityAboutComponent {



  realizationPath = "/champs d'apostolat/spiritualite/realisation" 
  
}
