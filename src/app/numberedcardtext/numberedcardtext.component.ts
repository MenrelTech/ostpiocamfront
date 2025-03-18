import { Component, input,OnInit } from '@angular/core';


@Component({
  selector: 'app-numberedcardtext',
  imports: [],
  templateUrl: './numberedcardtext.component.html',
  styleUrl: './numberedcardtext.component.css'
})
export class NumberedcardtextComponent implements OnInit  {
  numero = input.required<number>();
  couleur_bg = input<string>("gray");
  couleur_bgn = input<string>("gray");
  couleur_n = input<string>("gray");
  couleur_numero = {
    'color' : `${this.couleur_n()}`
  };
  couleur_texte = {
    'background-color' : `${this.couleur_bg()}`
  };
  couleur_bg_numero = {
    'background-color' : `${this.couleur_bgn()}`,
    'color' : `${this.couleur_n()}`
  };

  ngOnInit(): void {
    this.couleur_numero = {
      'color' : `${this.couleur_n()}`
    };
    this.couleur_texte = {
      'background-color' : `${this.couleur_bg()}`
    };
    this.couleur_bg_numero = {
      'background-color' : `${this.couleur_bgn()}`,
      'color' : `${this.couleur_n()}`
    };
  }
}
