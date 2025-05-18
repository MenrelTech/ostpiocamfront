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
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  @Input() bg: string = "white";
  @Input() color: string = "white";
  @Input() hovercolor: string = "";
  @Input() jour: string = "20";
  @Input() mois: string= '10';
  month = 'OCT';
  @Input() annee: string = "2023";
  @Input() title: string = "20e Anniversaire de l'oeuvre de St Padré Pio";
  @Input() description: string = "Le 20e anniversaire de l'oeuvre de St Padré Pio est célébré avec une grande ferveur et une profonde gratitude. Cet événement marquant nous rappelle l'impact durable de son héritage spirituel et de ses enseignements sur des millions de personnes à travers le monde.";
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
  getMonthAbbreviation(monthNumber: number) {
  const months = ["JAN", "FÉV", "MAR", "AVR", "MAI", "JUIN", 
              "JUIL", "AOÛT", "SEPT", "OCT", "NOV", "DÉC"]

  return months[monthNumber - 1] || "Invalid"
}
//FFF3CD


  ngOnInit(): void {
    this.month = this.getMonthAbbreviation(parseInt(this.mois))
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
