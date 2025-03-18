import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-cardtext',
  imports: [],
  templateUrl: './cardtext.component.html',
  styleUrl: './cardtext.component.css'
})
export class CardtextComponent {
  image = input<string>(); // image en entrée
  alt_message = input<string>();
  name = input<string>();
  role = input<string>();
  description = input<string>();
}
