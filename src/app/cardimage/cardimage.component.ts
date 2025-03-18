import { Component, input, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-cardimage',
  templateUrl: './cardimage.component.html',
  styleUrl: './cardimage.component.css'
})
export class CardimageComponent implements OnInit {
  title = input<string>();
  image = input<string>(); // image en entrée
  alt_message = input<string>();
  couleur = input<string>("white");
  coul = {
    'color' : this.couleur()
  };

  ngOnInit(): void {
    this.coul = {
      'color' : this.couleur()
    };
  }
}
