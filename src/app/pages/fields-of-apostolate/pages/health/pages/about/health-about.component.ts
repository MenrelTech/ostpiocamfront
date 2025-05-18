import { Component } from '@angular/core';
import { CardComponent } from '../../../../../../card/card.component';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HealthCarComponent } from '../../../../../../health-car/health-car.component';

@Component({
  standalone: true,
  templateUrl: './health-about.component.html',
  imports: [
    CardComponent,
    NumberedcardtextComponent,
    RouterLink,
    NgFor,
    HealthCarComponent
  ],
})
export class HealthAboutComponent {
  genralityLink = "/champs d'apostolat/sante/generalités";

  perspectivesLink = "/champs d'apostolat/sante/perspective"

  missions: string[] = [
    'Appuyer la politique nationale du don de sang',
    'Regrouper, recruter et encadrer les donneurs bénévoles',
    'Défendre les intérêts des donneurs et former les acteurs',
    'Intervenir sur les questions transfusionnelles au Cameroun et à l’international',
    'Fournir des services de santé non lucratifs et limiter les coûts',
    'Agir comme assemblée, facilitateur et soutien des politiques transfusionnelles',
    'Créer un espace d’échange, d’entraide et de gestion des urgences sanguines',
    'Promouvoir le bénévolat et l’engagement à travers diverses activités',
    'Renforcer les capacités d’approvisionnement en sang',
    'Mobiliser, organiser et coordonner les collectes de sang pour améliorer la santé des patients',
  ];

  actions: string[] = [
    'Information, Sensibilisation, Formation & Education',
    'Mobilisation sociale et des ressources',
    'Recrutement de Donneurs Bénévoles',
    'Organisation des Campagnes de collectes de sang',
    'Fidélisation de Donneurs Bénévoles Volontaires  de Sang Réguliers Non Rémunérés (DBVRSR)',
    'Valorisation et Partenariats',
    'Plaidoyer & Lobbying',
    'Equipements',
    'Organisation des Evènements',
    'Soutien et encouragement à l’Etude et la Recherche globale',
  ];

  values: string[] = [
    'Volontariat',
    'Bénévolat.',
    ' Non-Profit',
    'Engagement Citoyen & Chrétien.',
    'Esprit de Sacrifice',
  ];


  perspectives:string[] = [
    "Créer un numéro rouge pour répondre rapidement aux sollicitations.",
    "Faciliter l’accès aux produits sanguins, voire tendre vers la gratuité.",
    "Établir des accords de coopération avec les hôpitaux.",
    "Mettre en place un partenariat avec le Ministère de la Santé publique.",
    "Coopérer avec la Fédération internationale des donneurs bénévoles de sang et autres institutions.",
    "Organiser des activités de plaidoyer, comme le congrès sous-régional d’Afrique centrale et des Grands Lacs sur les associations de donneurs"
  ]
}
