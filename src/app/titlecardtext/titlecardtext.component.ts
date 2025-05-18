import {  Component, input,OnInit } from '@angular/core';
import { RegisterComponent } from "../pages/register/register.component";

@Component({
  selector: 'app-titlecardtext',
  imports: [RegisterComponent],
  templateUrl: './titlecardtext.component.html',
  styleUrl: './titlecardtext.component.css'
})
export class TitlecardtextComponent {
    contenu = input<string>();
    titre = input.required<string>();
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
