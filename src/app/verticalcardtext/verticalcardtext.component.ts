import { Component, input,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verticalcardtext',
  imports: [CommonModule],
  templateUrl: './verticalcardtext.component.html',
  styleUrl: './verticalcardtext.component.css'
})
export class VerticalcardtextComponent {
  image = input<string>(); // image en entrée
  alt_message = input<string>();
  name = input<string>();
  date_publication = input<string>('Publie le 11/02/2025 a 12h02');
  description = input<string>();
  @Input() color: string = "white";
  textcolor: { [key: string]: string } = {};
  ngOnInit(): void {

    this.textcolor = {
      'color': this.color // Utilisation directe de la valeur de `bg`
    };

  
}
}
