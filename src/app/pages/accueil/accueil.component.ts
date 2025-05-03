import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CarouselComponent } from '../../carousel/carousel.component';
import { CardtextComponent } from '../../cardtext/cardtext.component';
import { CardimageComponent } from '../../cardimage/cardimage.component';
import { VerticalcardtextComponent } from '../../verticalcardtext/verticalcardtext.component';
import { RdvcardComponent } from '../../rdvcard/rdvcard.component';

@Component({
  selector: 'app-accueil',
  imports: [RdvcardComponent,CarouselComponent,CardtextComponent,CardimageComponent,VerticalcardtextComponent],
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
