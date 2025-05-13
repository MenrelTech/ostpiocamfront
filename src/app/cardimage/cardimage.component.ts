import { Component, Input,input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardimage',
  imports: [CommonModule],
  templateUrl: './cardimage.component.html',
  styleUrl: './cardimage.component.css'
})
export class CardimageComponent implements OnInit {
  title = input<string>();
  image = input<string>(); // image en entrée
  alt_message = input<string>();
  couleur = input<string>("white");

  hoverText = input<string | undefined>("")
  hoverTitle = input<string | undefined>("")
  @Input() bg: string = "white";

  bg_color: { [key: string]: string } = {};

  coul = {
    'color' : this.couleur()
  };


  ngOnInit(): void {
    this.coul = {
      'color' : this.couleur()
    };
    this.bg_color = {
      'background': this.bg // Utilisation directe de la valeur de `bg`
    };

  }
}
