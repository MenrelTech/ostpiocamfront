import { NgFor } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone:true,
  templateUrl:"./perspectives.component.html", 
  imports:[NgFor]
})
export class PerspectivesComponent{
  longPerspectives:string[] = [
    "Créer un numéro rouge pour répondre rapidement aux sollicitations.",
    "Faciliter l’accès aux produits sanguins, voire tendre vers la gratuité.",
    "Établir des accords de coopération avec les hôpitaux.",
    "Mettre en place un partenariat avec le Ministère de la Santé publique.",
    "Coopérer avec la Fédération internationale des donneurs bénévoles de sang et autres institutions.",
    "Organiser des activités de plaidoyer, comme le congrès sous-régional d’Afrique centrale et des Grands Lacs sur les associations de donneurs."
  ]


}