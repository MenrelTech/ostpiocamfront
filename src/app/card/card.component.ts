import { Component, input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  image = input.required<string>(); // image en entrée
  icone = input.required<string>();
  alt_message = input<string>();
  name = input.required<string>();
  ville = input.required<string>();
  lieu = input.required<string>();
  couleur = input<string>("gray");

  couleur_texte = {
    'color' : `${this.couleur()}`
  };

  ngOnInit(): void {
    this.couleur_texte = {
      'color' : `${this.couleur()}`
    };
  }
}
