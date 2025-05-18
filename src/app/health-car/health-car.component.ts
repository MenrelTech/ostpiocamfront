import { Component, input, OnInit } from "@angular/core";



@Component({
  selector:"app-health-car",
  standalone:true,
  templateUrl:"./health-car.component.html"
})
export class HealthCarComponent implements OnInit{
  image = input.required<string>(); // image en entrée
  alt_message = input<string>();
  name = input.required<string>();
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