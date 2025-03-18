import { Component,input,OnInit } from '@angular/core';

@Component({
  selector: 'app-cardaddress',
  imports: [],
  templateUrl: './cardaddress.component.html',
  styleUrl: './cardaddress.component.css'
})
export class CardaddressComponent implements OnInit {

couleur_bg = input<string>("gray");
image = input.required<string>(); // image en entrée
alt_message = input<string>();
name = input.required<string>();
icone1 = input<string>();
icone2 = input<string>();
localisation = input.required<string>();
date_debut = input.required<string>();
date_fin = input.required<string>();

bg_color = {
    'background-color' : `${this.couleur_bg()}`
  };

  ngOnInit(): void {
    this.bg_color = {
      'background-color' : `${this.couleur_bg()}`
    };
  }
}
