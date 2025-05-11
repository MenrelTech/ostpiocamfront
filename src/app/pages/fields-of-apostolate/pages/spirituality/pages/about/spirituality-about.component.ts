import { Component } from '@angular/core';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';
import { ImgcardtextComponent } from '../../../../../../imgcardtext/imgcardtext.component';
import { TitlecardtextComponent } from '../../../../../../titlecardtext/titlecardtext.component';
import { CardComponent } from '../../../../../../card/card.component';

@Component({
  standalone: true,
  templateUrl: './spirituality-about.component.html',
  imports: [
    NumberedcardtextComponent,
    ImgcardtextComponent,
    TitlecardtextComponent,
    CardComponent,
  ],
})
export class SpiritualityAboutComponent {}
