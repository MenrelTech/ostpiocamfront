import { Component, input } from '@angular/core';

@Component({
  selector: 'app-verticalcardtext',
  imports: [],
  templateUrl: './verticalcardtext.component.html',
  styleUrl: './verticalcardtext.component.css'
})
export class VerticalcardtextComponent {
  image = input<string>(); // image en entrée
  alt_message = input<string>();
  name = input<string>();
  date_publication = input<string>('Publie le 11/02/2025 a 12h02');
  description = input<string>();
}
