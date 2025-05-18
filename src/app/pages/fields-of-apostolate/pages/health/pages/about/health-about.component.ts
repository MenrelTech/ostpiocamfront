import { Component, signal } from '@angular/core';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { HealthCarComponent } from '../../../../../../health-car/health-car.component';
import { RdvcardComponent } from "../../../../../../rdvcard/rdvcard.component";

interface GrandesDates {
  id: number;
  title: string;
  description: string;
  jour: string;
  mois: string;
  annee: string;
  date: string;
  color: Col;
}
interface Col {
  bg: string;
  color: string;
  hovercolor: string;
}
@Component({
  standalone: true,
  templateUrl: './health-about.component.html',
  imports: [
    NumberedcardtextComponent,
    RouterLink,
    NgFor,
    HealthCarComponent,
    NumberedcardtextComponent,
    RouterLink,
    CommonModule,
    NgFor,
    RdvcardComponent
],
})
export class HealthAboutComponent {
  genralityLink = "/champs d'apostolat/sante/generalités";

  perspectivesLink = "/champs d'apostolat/sante/perspective";

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

  perspectives: string[] = [
    'Créer un numéro rouge pour répondre rapidement aux sollicitations.',
    'Faciliter l’accès aux produits sanguins, voire tendre vers la gratuité.',
    'Établir des accords de coopération avec les hôpitaux.',
    'Mettre en place un partenariat avec le Ministère de la Santé publique.',
    'Coopérer avec la Fédération internationale des donneurs bénévoles de sang et autres institutions.',
    'Organiser des activités de plaidoyer, comme le congrès sous-régional d’Afrique centrale et des Grands Lacs sur les associations de donneurs',
  ];

  grandesDates = signal<GrandesDates[]>([]);

  link = "/champs d'apostolat/sante/historicité";
  linkGeneralite = "//champs d'apostolat/sante/généralité";
  linkPerspective = "//champs d'apostolat/sante/perspective";
  ngOnInit() {
    async function getDate(timeout = 10000) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        let response = await fetch(
          'https://ostpiocamback.enotelco.com/api/calendar_events',
          {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
            },
            signal: controller.signal,
          }
        );
        clearTimeout(id);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          let data = await response.json();
          return data;
        }
      } catch (error) {
        clearTimeout(id);
        throw error;
      }
    }
    getDate(20000)
      .then((data) => {
        let a = data.member.map((item: any) => {
          let couleur = '#C79100';
          if (item.title == 'Environnement') {
            couleur = '#00C7A0';
          } else if (item.title == 'Santé') {
            couleur = '#FF6F61';
          } else if (item.title == 'Spiritualité') {
            couleur = '#FF6F61';
          } else if (item.title == 'Communication') {
            couleur = '#FF6F61';
          }

          return {
            id: item.id,
            title: item.title,
            description: item.description,
            date:
              'Le ' + item.date.slice(0, 10) + ' à ' + item.date.slice(11, 16),
            jour: item.date.slice(8, 10),
            mois: item.date.slice(5, 7),
            annee: item.date.slice(0, 4),
            color: couleur,
          };
        });

        this.grandesDates.set([a[0], a[1], a[2], a[3]]);
      })
      .catch((error) => {
        console.error('Error fetching grandes dates:', error);
      });
  }
}
