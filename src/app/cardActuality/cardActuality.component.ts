import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-cardActuality',
  standalone: true,
  imports: [],
  templateUrl: './cardActuality.component.html',
  styleUrl: './cardActuality.component.css'
})
export default class CardActualityComponent {
  image = input<string>(); // image en entrée
  alt_message = input<string>();
  name = input<string>();
  area = input<string>();
  description = input<string>();
  date = input<string>();
}
