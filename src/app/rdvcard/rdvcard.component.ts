import { Component, input,Input ,signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rdvcard',
  imports: [CommonModule],
  templateUrl: './rdvcard.component.html',
  styleUrl: './rdvcard.component.css'
})
export class RdvcardComponent {
  hidden  = signal(true);
  hover = signal(false);
  @Input() bg: string = "white";
  @Input() color: string = "white";
  @Input() hovercolor: string = "";
  bg_color: { [key: string]: string } = {};
  other :  { [key: string]: string } = {};
  cardAspect : { [key: string]: string } = {};
  buttonAspect : { [key: string]: string } = {};
  buttonMessage = "Détails";

  showMore()  : void {
    // afficher ou cache les details de le carte
    this.hidden.set(!this.hidden());
    if (this.hidden()) {
      this.cardAspect = {
        'display': 'none' // Hauteur par défaut
      };
      this.bg_color = {
        'background': this.bg ,// Utilisation directe de la valeur de `bg`
        'border-radius': '10', 
      };
      this.buttonAspect = {
        'background': this.color ,// Utilisation directe de la valeur de `bg`
        'color': 'white',
      };
      this.buttonMessage = "Détails";
    }
    else { {
      this.cardAspect = {
        'display': 'block' // Hauteur automatique pour afficher le contenu
      };
      this.bg_color = {
        'border-top-left-radius': '10',
        'border-top-right-radius': '10',
        'background': this.bg ,
      };
      this.buttonAspect = {
        'border-color': this.color ,// Utilisation directe de la valeur de `bg`
        'color': this.color,
        'background': 'transparent',
      };
      this.buttonMessage = `Moins`;
    }
  }

  }

  setcolor() : void {
    this.hover.set(true);
    this.bg_color = {
      'background': this.hovercolor ,// Utilisation directe de la valeur de `bg`
    };
  }
  resetcolor() : void {
    this.hover.set(false);
    this.bg_color = {
      'background': this.bg ,// Utilisation directe de la valeur de `bg`
    };
  }
//FFF3CD


  ngOnInit(): void {

    this.bg_color = {
      'background': this.bg ,// Utilisation directe de la valeur de `bg`
      'border-radius': '10', 
    };
    this.buttonAspect = {
      'background': this.color ,// Utilisation directe de la valeur de `bg`
      'color': 'white',
    }
    this.other = {
      'background': this.color // Utilisation directe de la valeur de `bg`
    };
    this.cardAspect = {
      'display': 'none' // Hauteur par défaut
    };

  }
}
